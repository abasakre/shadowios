var obj = JSON.parse($response.body);

obj={
        "ip": "212.237.118.39",
        "continent": "ffffffffff",
        "continentCode": "ffffffffffffffff",
        "country": "IQ",
        "countryName": "ffffffffffffffffffffffffff",
        "subdivisions": [
          "DA"
        ],
        "city": "Duhok",
        "timezone": "Asia/Baghdad",
        "latitude": 36.8591,
        "longitude": 42.987,
        "isp": "O3-fffffffffffffffffffffffffffffff",
        "asnNumber": 206206,
        "asnOrganization": "ffffffffffffffffffffffffffffff Net Company for Computer and Internet Ltd.",
        "organization": "Kurdistaffffffffffffnnet",
        "postalCode": null
      }

$done({body: JSON.stringify(obj)});