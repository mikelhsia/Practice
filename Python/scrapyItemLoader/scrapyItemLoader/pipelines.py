# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html

import os
import urllib

class ScrapyitemloaderPipeline(object):
	def process_item(self, item, spider):

		# Creating all the folder and file necessary
		# src = "http://%s/%s" % (item['mhss'],item['mhurl'])
		# fileName = item['mhurl'].replace('/','-')
		# dirName = response.url.split("/")[-2]
		# filePath = "%s/%s" % (os.getcwd(), dirName)
		dst = os.path.join(item['imgDst'], item['imgFileName'])

		try:
			os.mkdir(item['imgDst'])
		except:
			# self.log("[IOError]: folder is already exist!")
			pass

		urllib.urlretrieve(item['imgSrc'], dst)
		return item
