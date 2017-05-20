curl -H "Content-Type: application/zip" \
     -H "Authorization: Bearer $NETLIFY" \
     --data-binary "website.zip" \
     https://api.netlify.com/api/v1/sites/michaelsolati-com/deploys