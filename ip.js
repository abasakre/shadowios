var obj = JSON.parse($response.body);

obj={
    
        "ip": "212.237.118.179",
        "continent": "akre",
      
}

$done({body: JSON.stringify(obj)});