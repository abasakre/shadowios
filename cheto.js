
var obj = JSON.parse($response.body);

obj = {
    "status": true,
    "uuid": "9B5A5CD1-4286-4F1F-8421-0667D20F1A90",
    "endtime": "2023-01-29 14:30",
    "message":"Safe 100%"
}

$done({body: JSON.stringify(obj)});