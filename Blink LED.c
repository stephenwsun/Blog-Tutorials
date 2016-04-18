/***********************************************************************************************************************************************************
 * Blink LED
 * Author: Stephen Sun
 ***********************************************************************************************************************************************************/

#include <msp430.h> 

int main(void)
{
    WDTCTL = WDTPW | WDTHOLD;	// Stop watchdog timer
	
    volatile int i;				// Define variable "i" for For Loop

    P1DIR = 0x03;				// Define Bit 0 and Bit 1 of Port 1 as Output

    P1OUT = 0x00;				// Set Bit 0 and Bit 1 of Port 1 to Zero

    while(1)					// Use a While Loop to loop forever
    {
        P1OUT ^= 0x03;			// Toggle Bit 0 and Bit 1 of Port 1

        for(i = 0;i<30000;i++);	// Delay Between Toggle
    }
}
