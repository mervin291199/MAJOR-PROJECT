import requests
while True:
	print("Enter speed\n")
	speed=int(input())
	if(speed>60):
		print("sending mails")
		r = requests.get(url = "http://localhost:8080/sendmail")
	else:
		print("speed is okay")