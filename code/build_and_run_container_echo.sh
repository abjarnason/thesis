docker build -t abjarnason/ws_text_binary_server .
docker stop ws_text_binary_server
docker rm ws_text_binary_server
docker run --name ws_text_binary_server -d -p 8080:8080 -v $PWD:/root abjarnason/ws_text_binary_server
