import serial
from datetime import datetime


objectDataArray =[] 


arduino_port = "/dev/ttyUSB0"
baud = 9600
fileName="airQualityData.csv"


ser = serial.Serial(arduino_port,baud)
print("Connected to Arduino port:" + arduino_port)
file = open(fileName,"a")
print("Created File")





samples = 100
print_labels = False

line = 0 

while line<samples:
	if print_labels:
		if line==0:
			print("Printing column headers")
		else:
			print("Line "+ str(line) + ": writing...")
	t3 = datetime.now()
	dateNow = t3.date()
	timeNow = t3.time()	

	getData = str(ser.readline())
	data =str(dateNow)+ ","+str(timeNow) +","+ getData[2:][:-5]
	print(data)

	# dataObj = createObject(data)
	# objectDataArray.append(dataObj)

	file = open(fileName,"a")
	file.write("\n")
	file.write(data)
	line = line + 1

print("Data Collection Complete")
file.close()



# def createObject()