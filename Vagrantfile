# -*- mode: ruby -*-
# vi: set ft=ruby :

$script = <<SCRIPT
debconf-set-selections <<< 'mysql-server-5.6 mysql-server/root_password password vagrant'
debconf-set-selections <<< 'mysql-server-5.6 mysql-server/root_password_again password vagrant'

sudo apt-get update
sudo apt-get -y install mysql-server
sudo apt-get -y install python-software-properties
sudo apt-get -y install lamp-server^
sudo add-apt-repository ppa:ondrej/php
sudo apt-get -y install libapache2-mod-php5.6
sudo apt-get -y install php-mysql

sudo a2dissite 000-default
sudo a2enmod rewrite
sudo service apache2 restart

SCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.network :forwarded_port, guest: 3306, host: 33066
  config.vm.network :forwarded_port, guest: 80, host: 8080

  config.vm.network "private_network", ip: "192.168.33.10"

  config.vm.synced_folder "public/", "/var/www/"

  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "1024"]
  end

  config.vm.provision "shell", inline: $script
end
