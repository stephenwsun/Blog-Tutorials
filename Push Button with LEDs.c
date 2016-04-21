/***********************************************************************************************************************************************************
 * Blink LED
 * Author: Stephen Sun
 ***********************************************************************************************************************************************************/

#include <msp430.h>

int main(void)
{

    WDTCTL = WDTPW | WDTHOLD;   // Stop watchdog timer

    volatile int i;   			// Define variable "i" for For Loop

    P1DIR=0x03;   				// Define Bit 0 and Bit 1 of Port 1 as Outputs

    P2DIR = 0x00;				// Define Bit 0 and Bit 1 of Port 2 as Inputs

    P2REN = 0xC0;				// Enable Pull-Up Resistors on P2.6 and P2.7

    P2OUT = 0xC0;				// Set Pull-Up Resistors to P2.6 and P2.7

    P1OUT=0x00;  				// Set LEDs off by Default

    while(1)
    {
        if((P2IN&0x40)!=0x40)   // check if switch is pressed or not
        {
            P1OUT^=0x03;      //if pressed toggle the state of led
            for(i=0;i<30000;i++);  //small delay to counter multiple key press
        }
        if((P2IN&0x80)!=0x80)   // check if switch is pressed or not
        {
        	//P1OUT=0X01;
            P1OUT^=0x02;      //if pressed toggle the state of led
            for(i=0;i<30000;i++);  //small delay to counter multiple key press
        }
    }
}


/*WDTCTL = WDTPW | WDTHOLD;	// Stop watchdog timer

    volatile int i;				// Define variable "i" for For Loop

    P1DIR = 0x03;				// Define Bit 0 and Bit 1 of Port 1 as Output

    P1OUT = 0x00;				// Set Bit 0 and Bit 1 of Port 1 to Zero

    while(1)					// Use a While Loop to loop forever
    {
        P1OUT ^= 0x03;			// Toggle Bit 0 and Bit 1 of Port 1

        for(i = 0;i<30000;i++);	// Delay Between Toggle
    }*/





