#include <linux/kernel.h>
#include <linuc/init.h>
#include <linux/slab.h>
#include <asm/io.h>

#define LLL_MAX_USER_SIE 1024


#define BCM2837_GPIO_ADDRESS 0x3F200000
#define BCM2711_GPIO_ADDRESS 0xfe200000

static struct proc_dir_entry *lll_proc = NULL;


static void gpio_pin_on(unsigned int pin){
    unsigned int fsel_index = pin/10;
    unsigned int fsel_bitpos = pin%10;
    unsigned int* gpio_fsel = gpio_registers + fsel_index;
    unsigned int*gpio_on_register = (unsigned int*)((char*)gpio_registers + 0x1c);

    *gpio_fsel &= ~(7 << (fsel_bitpos*3));
	*gpio_fsel |= (1 << (fsel_bitpos*3));
	*gpio_on_register |= (1 << pin);

    return;
}

static void gpio_pin_off(unsigned int pin){
    unsigned int *gpio_off_register = (unsigned int*)((char*)gpio_registers + 0x28);
    *gpio_off_register |= (1<<pin);
    return;
}

ssize_t lll_read(struct  file *file, char __user *user, size_t size, loff_t *off){

}