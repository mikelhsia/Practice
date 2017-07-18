#!/usr/local/bin/python
#! -*- coding: UTF-8 -*-

'''
对spider来说，爬取的循环类似下文:

以初始的URL初始化Request，并设置回调函数。 
当该request下载完毕并返回时，将生成response，并作为参数传给该回调函数。
spider中初始的request是通过调用 start_requests() 来获取的。 
start_requests() 读取 start_urls 中的URL， 并以 parse 为回调函数生成 Request 。
在回调函数内分析返回的(网页)内容，返回 Item 对象或者 Request 或者一个包括二者的可迭代容器。 
返回的Request对象之后会经过Scrapy处理，下载相应的内容，并调用设置的callback函数(函数可相同)。
在回调函数内，您可以使用 选择器(Selectors) (您也可以使用BeautifulSoup, lxml 或者您想用的任何解析器) 
来分析网页内容，并根据分析的数据生成item。
最后，由spider返回的item将被存到数据库(由某些 Item Pipeline 处理)或使用 Feed exports 存入到文件中。
'''

'''
为了创建一个Spider，您必须继承 scrapy.Spider 类， 且定义以下三个属性:
1. name: 用于区别Spider。 该名字必须是唯一的，您不可以为不同的Spider设定相同的名字。
2. start_urls: 包含了Spider在启动时进行爬取的url列表。 因此，第一个被获取到的页面将是其中之一。 
   后续的URL则从初始的URL获取到的数据中提取。
3. parse() 是spider的一个方法。 被调用时，每个初始URL完成下载后生成的 Response 对象将会作为唯一的参数传递给该函数。 
   该方法负责解析返回的数据(response data)，提取数据(生成item)以及生成需要进一步处理的URL的 Request 对象。
'''
import scrapy
import os

from fzdm.items import FzdmItem

class fzdmSpider(scrapy.Spider):
	# 必须定义name，即爬虫名，如果没有name，会报错。因为源码中是定义为必须的。
	name = "fzdm"
	allowed_domains = ["manhua.fzdm.com/"]
	# Scrapy为Spider的 start_urls 属性中的每个URL创建了 scrapy.Request 对象，
	# 并将 parse 方法作为回调函数(callback)赋值给了Request。
	start_urls = []
	for x in range(1):
		start_urls.append("http://manhua.fzdm.com/%d/%d/index.html" % (56, 223-x))
		for y in range(22):
			start_urls.append("http://manhua.fzdm.com/%d/%d/index_%d.html" % (56, 223-x, y+1))


	def parse(self, response):
		# Selector有四个基本的方法(点击相应的方法可以看到详细的API文档):
		# - xpath(): 传入xpath表达式，返回该表达式所对应的所有节点的selector list列表 。
		#   -- /html/head/title: 选择HTML文档中 <head> 标签内的 <title> 元素
		# 	-- /html/head/title/text(): 选择上面提到的 <title> 元素的文字
		# 	-- //td: 选择所有的 <td> 元素
		# 	-- //div[@class="mine"]: 选择所有具有 class="mine" 属性的 div 元素
		# - css(): 传入CSS表达式，返回该表达式所对应的所有节点的selector list列表.
		# - extract(): 序列化该节点为unicode字符串并返回list。
		# - re(): 根据传入的正则表达式对数据进行提取，返回unicode字符串list列表。

		item = FzdmItem()
		item['name'] = response.xpath('//title/text()').extract()
		item['mhss'] = u'p1.xiaoshidi.net'
		item['mhurl'] = response.xpath('//script[@type="text/javascript"]/text()').extract()
		# print type(item['mhurl']) is a list

		for line in item['mhurl']:
			startStr = 'var mhurl = "'
			endStr = 'jpg'
			startIdx = line.find(startStr)
			endIdx = line.find(endStr)
			if startIdx > 0:
				# print line[resultIdx+13:resultIdx+40]
				# print "[Found]!"
				item['mhurl'] = line[startIdx+13:endIdx+3]
				break

		# url = "http://%s/%s" % (item['mhss'],mhurl)

		'''
		# Creating all the folder and file necessary
		filename = response.url.split("/")[-1]
		dirname = response.url.split("/")[-2]
		try:
			os.mkdir(dirname)
		except:
			# print "folder is already exist@"
			pass

		with open(dirname + '/' + filename, 'wb') as f:
			# for line in response.body:
			# 	print line
			f.write(response.body)
		'''

		return item

		'''
		# 获取所有的url，继续访问，并在其中寻找相同的url
		# 即通过yield生成器向每一个url发送request请求，并执行返回函数parse
        all_urls = hxs.select('//a/@href').extract()
        for url in all_urls:
            if url.startswith('http://www.xiaohuar.com/list-1-'):
                yield Request(url, callback=self.parse)
		'''

