/************************************************************************************
 * Delay.c
 * Author: Stephen Sun
 ************************************************************************************/

#include "Delay.h"

/* Each delay cycle is approximately 83.3 ns for 12 MHz clock (1/clock frequency) */
/* Change according to clock frequency */

/* Function for 1 Second Delay */
void delay_s(int s)
{
	while (s--)
	{
		__delay_cycles(12004802);
	}

}

/* Function for 1 MilliSecond Delay */
void delay_ms(int ms)
{
	while (ms--)
	{
		__delay_cycles(12005);
	}	
	
}

/* Function for 1 MicroSecond Delay */
void delay_us(int us)
{
	while (us--)
	{
		__delay_cycles(12);
	}	
	
}
