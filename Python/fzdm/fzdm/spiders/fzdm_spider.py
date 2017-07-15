#!/usr/local/bin/python
#! -*- coding: UTF-8 -*-

'''
为了创建一个Spider，您必须继承 scrapy.Spider 类， 且定义以下三个属性:
1. name: 用于区别Spider。 该名字必须是唯一的，您不可以为不同的Spider设定相同的名字。
2. start_urls: 包含了Spider在启动时进行爬取的url列表。 因此，第一个被获取到的页面将是其中之一。 
   后续的URL则从初始的URL获取到的数据中提取。
3. parse() 是spider的一个方法。 被调用时，每个初始URL完成下载后生成的 Response 对象将会作为唯一的参数传递给该函数。 
   该方法负责解析返回的数据(response data)，提取数据(生成item)以及生成需要进一步处理的URL的 Request 对象。
'''
import scrapy

class fzdmSpider(scrapy.Spider):
	name = "fzdm"
	allowed_domains = ["manhua.fzdm.com/"]
	# Scrapy为Spider的 start_urls 属性中的每个URL创建了 scrapy.Request 对象，
	# 并将 parse 方法作为回调函数(callback)赋值给了Request。
	start_urls = []
	for x in range(3):
		start_urls.append("http://manhua.fzdm.com/56/%d" % (223-x))

	def parse(self, response):
		filename = response.url.split("/")[-2]
		with open(filename, 'wb') as f:
			f.write(response.body)

# Selector有四个基本的方法(点击相应的方法可以看到详细的API文档):
# - xpath(): 传入xpath表达式，返回该表达式所对应的所有节点的selector list列表 。
# - css(): 传入CSS表达式，返回该表达式所对应的所有节点的selector list列表.
# - extract(): 序列化该节点为unicode字符串并返回list。
# - re(): 根据传入的正则表达式对数据进行提取，返回unicode字符串list列表。