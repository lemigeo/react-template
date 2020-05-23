start:
	@pm2 start

restart:
	@pm2 restart react-template

delete:
	@pm2 delete react-template

build:
	@yarn build