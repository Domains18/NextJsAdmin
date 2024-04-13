obj-m += lll-gpio-driver.o

KDIR = /lib/modules/$(shell uname -r)/build

all:
 make -C