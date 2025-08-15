#!/bin/bash

set -e

echo "=== Atualizando o sistema ==="
sudo apt-get update
sudo apt-get upgrade -y

echo "=== Instalando Docker ==="
curl -fsSL https://get.docker.com | sh

echo "=== Criando volume do Home Assistant ==="
sudo mkdir -p /srv/homeassistant
sudo chown 1000:1000 /srv/homeassistant

echo "=== Iniciando o Home Assistant em container ==="
sudo docker run -d \
  --name homeassistant \
  --restart=unless-stopped \
  -e TZ=America/Sao_Paulo \
  -v /srv/homeassistant:/config \
  --network=host \
  ghcr.io/home-assistant/home-assistant:stable

echo "=== Finalizado! ==="
echo "Acesse o Home Assistant em http://<IP_DO_SEU_SERVIDOR>:8123 após alguns minutos."
