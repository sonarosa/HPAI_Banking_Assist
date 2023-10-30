from Dataset import PageSequenceDataset
from PagePredictor import PagePredictionModel
from torch.utils.data import DataLoader
import torch.nn as nn
import torch
import torch.optim as optim
import numpy as np

import json

dataset_path = './sample.json'
data = json.load(open(dataset_path))



dataset = PageSequenceDataset(data["data"])
dataloader = DataLoader(dataset, batch_size=1, shuffle=True)  # Adjust batch_size as needed


# Instantiate the model
num_pages = 200
input_dim = num_pages  # Number of unique pages
embedding_dim = 128
hidden_dim = 256
output_dim = num_pages  # Same as input_dim
n_layers = 2
dropout = 0.2

num_epochs = 10

model = PagePredictionModel(input_dim, embedding_dim, hidden_dim, output_dim, n_layers, dropout)

# Define loss and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop (assuming you have your data in a suitable format)
for epoch in range(num_epochs):
    for page_sequence, next_page in dataloader:
        optimizer.zero_grad()
        page_sequence = torch.LongTensor(page_sequence)
        next_page = torch.LongTensor([next_page])

        output = model(page_sequence)

        print(output)
        print(next_page)
        loss = criterion(output, next_page)
        loss.backward()
        optimizer.step()