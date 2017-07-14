#!/usr/bin/python
# -*- coding: UTF-8 -*-

def fib(n):    # write Fibonacci series up to n
	a, b = 0, 1
	print "Inside Fib function", __name__
	while b < n:
		print b
		a, b = b, a+b


if __name__ == "__main__":
	import sys
# 可以python script.py <arguments> 的方式执行
	fib(int(sys.argv[1]))
