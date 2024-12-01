echo "Instalando node v20 y su correspondiente npm"
nvm install v20

wait
echo "Inicializo un nuevo proyecto node, esto solamente si no tengo uno ya"

npm init -y

wait

npm install express
