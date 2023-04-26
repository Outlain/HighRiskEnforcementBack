import requests
from bs4 import BeautifulSoup


# Make a request to the webpage
url = 'https://appx.wheniwork.com/sites'
response = requests.get(url)
print(response.content)
# print(response.status_code)

# Parse the HTML content with Beautiful Soup
soup = BeautifulSoup(response.content, 'html.parser')

# Find all the rows in the table
rows = soup.find_all('div', class_='ag-row')

# Loop through the rows and extract the data for "West Palm Beach Plaza"
for row in rows:
    name = row.find('span', class_='ag-cell-value').text
    address = row.find('div', {'col-id': 'address'}).text
    location_id = row.find('div', {'col-id': 'location_id'}).text
    if location_id == 'West Palm Beach':
        print(name, address)

print("sadfasdf")

