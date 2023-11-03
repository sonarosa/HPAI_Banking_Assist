import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, Dataset
import json

# Define the LSTM Encoder-Decoder model
class EncoderDecoder(nn.Module):
    def __init__(self, vocab_size, embedding_dim, hidden_dim, output_dim, num_layers, dropout):
        super(EncoderDecoder, self).__init__()

        # Embedding layer
        self.embedding = nn.Embedding(vocab_size, embedding_dim)

        # Encoder
        self.encoder = nn.LSTM(embedding_dim, hidden_dim, num_layers=num_layers, dropout=dropout)

        # Decoder
        self.decoder = nn.LSTM(embedding_dim, hidden_dim, num_layers=num_layers, dropout=dropout)

        # Output layer
        self.out = nn.Linear(hidden_dim, output_dim)

        self.dropout = nn.Dropout(dropout)

    def forward(self, app_features, times, goal):
        # Embed app features and times
        embedded_app = self.dropout(self.embedding(app_features))
        embedded_times = self.dropout(self.embedding(times))

        # Encoder
        _, (hidden, cell) = self.encoder(embedded_app)

        # Decoder
        output, _ = self.decoder(embedded_times, (hidden, cell))

        # Final output
        prediction = self.out(output)

        return prediction[:,-1]

# Define a custom dataset
class AppDataset(Dataset):
    def __init__(self, data, vocab):
        self.data = data
        self.vocab = vocab
        
    def __len__(self):
        return len(self.data)

    def __getitem__(self, idx):
        visit = self.data[idx]
        print(visit)
        app_features = torch.LongTensor(visit["visit"])
        times = torch.LongTensor(visit["time"])
        goal = torch.LongTensor([visit["goal"][0]])
        return app_features, times, goal



data_json = json.load(open("sample.json"))
data = data_json["data"]



vocab = {
    "Home": 0,
    "Login Now": 1,
    "UPI": 2,
    "Pay To Contacts": 3,
    "Insurance": 4,
    "Net Banking": 5,
    "Bank Holidays": 6,
    "Pay To Account": 7,
    "Pay To IFSC": 8,
    "Pay To Aadhar": 9,
    "Pay To Mobile": 10,
    "Statement": 11,
    "Pay To VPA": 12,
    "Pay To Mobile": 13,
    "Bank statement": 190,
    "Pay To Account": 191,
    "Pay To IFSC": 123,
    "login details": 124,
    "Reset password": 145,
}


keys = list(vocab.keys())

# Define the model's hyperparameters
vocab_size = 200  # Vocabulary size
embedding_dim = 100  # Dimension of word embeddings
hidden_dim = 256  # LSTM hidden state dimension
output_dim = vocab_size  # Output dimension
num_layers = 2  # Number of LSTM layers
dropout = 0.5  # Dropout probability
batch_size = 1  # Batch size
num_epochs = 10  # Number of epochs

# Create an instance of the Encoder-Decoder model
model = EncoderDecoder(vocab_size, embedding_dim, hidden_dim, output_dim, num_layers, dropout)

# Define the loss function and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

print(keys)

# Create a DataLoader for your dataset
train_dataset = AppDataset(data, vocab)
train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)

# Create a DataLoader for your validation dataset
validation_dataset = AppDataset(data, vocab)
validation_loader = DataLoader(validation_dataset, batch_size=batch_size, shuffle=True)

# Training loop
for epoch in range(num_epochs):
    model.train()
    for app_features, times, goal in train_loader:
        optimizer.zero_grad()

        output = model(app_features, times, goal)
        output_dim = output.shape[-1]
        output = output.view(-1, output_dim)
        goal = goal.view(-1)

        loss = criterion(output, goal)
        print(loss, output, goal)
        loss.backward()
        optimizer.step()

# Save the model
torch.save(model.state_dict(), "model.pt")


