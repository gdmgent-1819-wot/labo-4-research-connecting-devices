# Connecting Devices RBP 3
## Get ready
always update your pi first
```
sudo apt-get update
sudo apt-get upgrade -y
```


## WII remote
### Install modules RBP
```
sudo apt-get install python-cwiid
sudo apt-get install wminput
```

Extra intresting links: <br/>
https://www.raspberrypi-spy.co.uk/2013/02/nintendo-wii-remote-python-and-the-raspberry-pi/ <br/>
https://pimylifeup.com/raspberry-pi-wiimote-controllers/

### ember client
https://www.emberjs.com
#### install
```
npm install -g ember-cli
```
Don't forget to download the node modules when cloning this project:
```
npm install
```
Highscores can be viewed at: http://localhost:4200/highscores
#### modules uses
firebase: https://github.com/firebase/emberfire  <br/>
sass: https://www.npmjs.com/package/ember-cli-sass  <br/>
font-awesome: https://github.com/martndemus/ember-font-awesome  