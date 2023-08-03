####  UBUNTU 22.04

ssh-keygen -f "/home/fuinhagame2/.ssh/known_hosts" -R "209.208.78.148"

passwd
adduser fuinha
adduser panetone
adduser fuinha sudo
adduser panetone sudo

# SET LOCAL TIMEDATE-------------------------------------
echo "export LANGUAGE=es_PY.UTF-8
export LANG=es_PY.UTF-8
export LC_ALL=es_PY.UTF-8">>~/.bash_profile

sudo dpkg-reconfigure locales
timedatectl set-timezone America/Asuncion
timedatectl set-timezone America/Sao_Paulo

sudo apt install systemd-timesyncd
timedatectl set-ntp true
sudo timedatectl set-ntp on

sudo apt update
sudo apt upgrade


sudo apt -y install  build-essential p7zip-full p7zip-rar zip unzip curl htop lsof hexedit ca-certificates software-properties-common apt-transport-https cmake libunwind8 clang zlib1g-dev libcurl4-openssl-dev libkrb5-dev upx  putty htop ufw tasksel virtualenv python3-dev apktool snap gparted flatpak snapd vagrant update-manager-core ecryptfs-utils libglu1-mesa-dev cryptsetup net-tools nmap openjdk-11-jdk

sudo apt install libboost-dev libncurses-dev -y
sudo apt-get install python3-pip python3-dev -y

sudo apt-get install libssl-dev git make apksigner wget make flex bison gperf aptitude cryfs encfs ecryptfs-utils curl zsh zsh-syntax-highlighting ruby-full cmake -y

sudo reboot
ssh fuinha@209.208.78.148

sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

sudo nano .zshrc
ZSH_THEME="rkj-repos"
source ~/.zshrc

mkdir ~/.ssh && chmod 700 ~/.ssh

################in your machine 
ssh-keygen -b 4096 
cd .ssh
scp id_rsa.pub fuinha@209.208.78.148:~/.ssh/authorized_keys
##################in your machine 

sudo nano /etc/ssh/sshd_config
#uncoment Port 22
Port 2898
AddressFamily inet
PermitRootLogin no
PasswordAuthentication yes
PermitEmptyPasswords no

sudo systemctl restart sshd
exit

ssh fuinha@209.208.78.148 -p 2898 

sudo ss -tupln 
sudo ufw status 

sudo ufw allow 80/tcp 
sudo ufw allow http
sudo ufw allow https
sudo ufw status
sudo ufw allow 3000
sudo ufw allow 3333
sudo ufw allow 4000
sudo ufw allow 9000
sudo ufw allow 5000
sudo ufw allow 5555
sudo ufw allow 2898
sudo ufw allow 2828
sudo ufw enable
sudo apt update

wget -qO- https://deb.nodesource.com/setup_16.x | sudo -E bash
sudo apt install -y nodejs
sudo npm install --global yarn

curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 

#Add in your ~/.zshrc the following:
 export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loa>

source ~/.zshrc

sudo yarn global add serve
sudo yarn global add pkg
sudo yarn global add pm2
sudo npm install -g serve
sudo npm install -g pm2
sudo npm install -g pkg

sudo hostname pyfoundation.online
sudo nano /etc/hostname
  pyfoundation.online
sudo nano /etc/hosts
  127.0.1.1 pyfoundation.online  
hostnamectl set-hostname pyfoundation.online
echo $(hostname -I | cut -d\  -f1) $(hostname) | sudo tee -a /etc/hosts
hostnamectl

sudo apt install nginx git

mkdir -p ~/.docker/cli-plugins/

sudo curl -L https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

sudo apt remove certbot docker docker.io containerd runc
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo apt install certbot python3-certbot-apache
####################################
sudo netstat -tulpn | grep :80
sudo systemctl stop nginx
sudo certbot certonly --standalone
####################################

#Certificate Path: /etc/letsencrypt/live/example.com/fullchain.pem
#Private Key Path: /etc/letsencrypt/live/example.com/privkey.pem
sudo snap install docker
sudo groupadd docker

sudo usermod -aG docker fuinhagame
sudo usermod -aG docker $USER

docker-compose --version
nvm -v
npm -v
node -v
yarn -v
docker -v
docker-compose -v
java -version 
javac --version

sudo reboot

git clone --depth 1 https://github.com/supabase/supabase.git
cd supabase/docker
cp .env.example .env
#generate 50 char password https://bitwarden.com/password-generator/
# and another to JWT key

#Use your JWT_SECRET to generate an ANON_KEY on the Supabase website. Copy and paste your JWT_SECRET, switch the Preconfigured Payload type to ANON_KEY, press Generate JWT, and copy the Generated Token result into the ANON_KEY value in the 
# https://supabase.com/docs/guides/hosting/overview

nano .env
POSTGRES_PASSWORD=T2n7ZCc1u9z16P8OCoZPS2Pka4dnG4ku06UmflXwBpk61gJlTx
JWT_SECRET=BdWNNK2DzGewIt0RWJNoxa5TvVBWWmn7WBP3CVP3JQ9ZuZigpj
ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICAgInJvbGUiOiAiYW5vbiIsCiAgICAiaXNzIjogInN1cGFiYXNlIiwKICAgICJpYXQiOiAxNjYzMzAwODAwLAogICAgImV4cCI6IDE4MjEwNjcyMDAKfQ.Fgc59BymGoiW0rCmN0PiP21bcYiOvOJy1NdKnw8pGog
SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICAgInJvbGUiOiAic2VydmljZV9yb2xlIiwKICAgICJpc3MiOiAic3VwYWJhc2UiLAogICAgImlhdCI6IDE2NjMzMDA4MDAsCiAgICAiZXhwIjogMTgyMTA2NzIwMAp9._y5z2-nKXlrRDN1r6NHmIrI4gCw0UoxMkyo49xaFvYE


cd volumes/api
nano kong.yml

#place anonkey
consumers:
- username: anon
  keyauth_credentials:
  - key: [anon key]

#place  services keys role
 - username: service_role
  keyauth_credentials:
  - key: [service_role key]

cd ..
cd ..
sudo docker-compose up -d
sudo docker ps

sudo systemctl stop nginx
sudo service nginx stop
sudo ls -l /var/lib/dpkg/info | grep -i package_name

#sudo apt-get -o DPkg::options::=--force-confmiss --reinstall install nginx-common
 sudo apt-get --purge autoremove nginx  
sudo rm -rf /etc/nginx/                    
sudo rm -rf /usr/sbin/nginx
  sudo apt-get install nginx nginx-extras
  sudo apt-get --purge autoremove nginx-extras
  sudo apt-get purge apache2 apache2-utils apache2-bin
  sudo reboot
which nginx
whereis nginx

sudo apt install nginx -y
sudo apt install nginx nginx-full -y
sudo apt install nginx-extras -y

systemctl status nginx
curl -4 icanhazip.com
#sudo systemctl disable nginx

# SETTING URL
sudo mkdir -p /var/www/pyfoundation.online/html
sudo chown -R $USER:$USER /var/www/pyfoundation.online/html
sudo chmod -R 755 /var/pyfoundation.online
nano /var/www/pyfoundation.online/html/index.html

<html>
    <head>
        <title>Welcome to pyfoundation.online!</title>
    </head>
    <body>
        <h1>Success!  The pyfoundation.online server block is working!</h1>
    </body>
</html>

sudo mkdir -p /etc/nginx/sites-available
sudo nano /etc/nginx/sites-available/pyfoundation.online

server {
        listen 80;
        listen [::]:80;

        root /var/www/pyfoundation.online/html;
        index index.html index.htm index.nginx-debian.html;

        server_name pyfoundation.online www.your_domain;

        location / {
                try_files $uri $uri/ =404;
        }
}

sudo ln -s /etc/nginx/sites-available/pyfoundation.online /etc/nginx/sites-enabled/
sudo nano /etc/nginx/nginx.conf

#uncommnet
  server_names_hash_bucket_size 64;


sudo nginx -t

sudo systemctl restart nginx

www.pyfoundation.online

#################################################################
sudo docker run -d --name nginx-base -p 80:80 nginx:latest
mkdir nginx
sudo docker cp nginx-base:/etc/nginx/conf.d/default.conf ~/nginx/default.conf

sudo nano nginx/default.conf

# Complete Nginx Docker reverse proxy config file
server {
  listen 80;
  listen [::]:80;
  server_name localhost;

  location / {
    root /usr/share/nginx/html;
    index index.html index.htm;
  }

  location /sample {
    proxy_pass http://209.208.78.148:3000/sample;
  }

  error_page 500 502 503 504 /50x.html;
  location = /50x.html {
    root /usr/share/nginx/html;
  }
} # End of Docker Nginx reverse proxy example file

sudo docker cp ~/nginx/default.conf nginx-base:/etc/nginx/conf.d/

sudo docker exec nginx-base nginx -t
sudo docker exec nginx-base nginx -s reload


#################################################################
###################### SSL 
sudo rm /etc/nginx/sites-enabled/default
sudo nano /etc/nginx/sites-available/pyfoundation.online

upstream supabase {
  server localhost:3000;
}

server {
  listen 443 ssl http2;
  server_name pyfoundation.online;

  gzip on;

  ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
  ssl_session_cache builtin:1000 shared:SSL:10m; 
  ssl_session_cache shared:MySSL:10m;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers HIGH:!aNULL:!eNULL:!EXPORT:!CAMELLIA:!DES:!MD5:!PSK:!RC4;
  ssl_prefer_server_ciphers on;

# REST API
location ~ ^/rest/v1/(.*)$ {
    proxy_set_header Host $host;
    proxy_pass http://kong:8000;
    proxy_redirect off;
  }

# Authentication
location ~ ^/auth/v1/(.*)$ {
    proxy_set_header Host $host;
    proxy_pass http://kong:8000;
    proxy_redirect off;
  }

# Realtime
location ~ ^/realtime/v1/(.*)$ {
    proxy_redirect off;
    proxy_pass http://kong:8000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
    proxy_set_header Host $host;
  }
}

sudo ln -s /etc/nginx/sites-available/supabase /etc/nginx/sites-enabled/supabase.conf
sudo nginx -t
sudo /etc/init.d/nginx reload

https://pyfoundation.online

################################# SUPABASE #################################
 
 pyfoundation.online
 
ssh fuinha@209.208.78.148 -p 2898

3000 supabase
 # Get the code
git clone --depth 1 https://github.com/supabase/supabase

# Go to the docker folder
cd supabase/docker

# Copy the fake env vars
cp .env.example .env

# Start
docker-compose up

Replace the values in these files:

.env:
ANON_KEY - replace with an anon key 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UiLAogICAgImlhdCI6IDE2NTg4OTA4MDAsCiAgICAiZXhwIjogMTgxNjY1NzIwMAp9.7bDH-Ln9HvShozz6DOj1oFkwg2ZbRqZZjCH197S0lxQ

SERVICE_ROLE_KEY - replace with a service key
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJzZXJ2aWNlX3JvbGUiLAogICAgImlzcyI6ICJzdXBhYmFzZSIsCiAgICAiaWF0IjogMTY1ODg5MDgwMCwKICAgICJleHAiOiAxODE2NjU3MjAwCn0.AGROiJGzScmuyjtUtEx25vFONpWwu0x0zPpfNaTK5OA

volumes/api/kong.yml
anon - replace with an anon key
service_role - replace with a service key

POSTGRES_PASSWORD: the password for the postgres role.
@fenixdamatrix08

JWT_SECRET: used by PostgREST and GoTrue, among others.
OY83d51wwBCCNWUdfGqS+1e88BfscB6vVzn9fA9zt04TQk6KSXEifaDupG9hJ1BLTwVj/7S8+owwKDNA8otK9Rv/kgeRt/+4MJ53+wm/kfr0USRXrBEyOoxUPycEfRZ6nXMHLD22zJObode52O4ddao3EXMpnR7Ncu3pxZc7k9cizXdAM/olqFGUPM7sTQsH8l8Yz20cNA+GodBbNbVEbmYhhgKoO6lgqukCtI7xlrbTrVfAVY+ShWDbNWq+n6Z76WU8nKMK8GK7DlOxod6MJeFdviaH3+Nj1pC4a8kMzSqAK6D5iGjlgTsPcM1/oV8Sf1iz78j/QwWwCAzJaNwNzw==

SITE_URL: the base URL of your site.
SMTP_*: mail server credentials. You can use any SMTP server

GENERATE JWT SECRET 
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"


roheka
@fenixdamatrix08
url=https://zyjftgdthlgxgakewsci.supabase.co

anon=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5amZ0Z2R0aGxneGdha2V3c2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkwMjg5ODUsImV4cCI6MTk3NDYwNDk4NX0._Dosf0v7ldYZDlgb1E5wJP05ZqjyjlHzxzzix-hbKk0
service=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5amZ0Z2R0aGxneGdha2V3c2NpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1OTAyODk4NSwiZXhwIjoxOTc0NjA0OTg1fQ.sLiP2l8XVKadrbsSFzaPzcsqGvHbR0hddAPjobRR8zM
jwt=g/FceYVjdmFE0Y6wQsmH18EUCx/zpCSrUpAHcATpLpVcOLBQKfUzbVqaqycJ1AZ4t4pzTUAnlpy4maIeIohtNg==
  ################################# SUPABASE #################################

create table todos (
  id bigint generated by default as identity primary key,
  user_id uuid references auth.users not null,
  user_name text default '',
  user_link text default '',
  user_resolve_avaliate text default '',
  user_atention_avaliate text default '',
  user_positioning text default '',
  user_invoice text default '',
  user_observation text default '',
  task text check (char_length(task) > 3),
  is_complete boolean default false,
  inserted_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table todos enable row level security;
create policy "Individuals can create todos." on todos for
    insert with check (auth.uid() = user_id);
create policy "Individuals can view their own todos. " on todos for
    select using (auth.uid() = user_id);
create policy "Individuals can update their own todos." on todos for
    update using (auth.uid() = user_id);
create policy "Individuals can delete their own todos." on todos for
    delete using (auth.uid() = user_id);