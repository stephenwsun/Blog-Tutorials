/***********************************************************************************************************************************************************
 * Push Button with LEDs
 * Author: Stephen Sun
 ***********************************************************************************************************************************************************/

#include <msp430.h>

int main(void)
{

    WDTCTL = WDTPW | WDTHOLD;   	// Stop watchdog timer

    volatile int i;   				// Define variable "i" for For Loop

    P1DIR=0x03;   					// Define Bit 0 and Bit 1 of Port 1 as Outputs

    P2DIR = 0x00;					// Define Bit 0 and Bit 1 of Port 2 as Inputs

    P2REN = 0xC0;					// Enable Pull-Up Resistors on P2.6 and P2.7

    P2OUT = 0xC0;					// Set Pull-Up Resistors to P2.6 and P2.7

    P1OUT=0x00;  					// Set LEDs off by Default

    while(1)
    {
        if((P2IN&0x40)!=0x40)   	// Check to see if Switch 1 (P2.6) is Pressed
        {
            P1OUT^=0x03;      		// Toggle both LEDs if Switch 1 is Pressed

            for(i=0;i<30000;i++);  	// Delay
        }
        
        if((P2IN&0x80)!=0x80)   	// Check to see if Switch 2 (P2.7) is Pressed
        {
            P1OUT^=0x02;      		// Toggle only LED2 if Switch 2 is Pressed

            for(i=0;i<30000;i++);   // Delay
        }
    }
}

