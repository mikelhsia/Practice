# -*- coding: utf-8 -*-
import scrapy
import urlparse

# 已经load了
# from scrapy.contrib.loader import ItemLoader
from scrapyItemLoader.items import ScrapyitemloaderItem
from scrapy.http import Request

class SilSpiderSpider(scrapy.Spider):
	name = 'sil_spider'
	allowed_domains = ["manhua.fzdm.com/"]

	manga      = int(raw_input("Input Manga code: "))
	targetChap = int(raw_input("Input start downloading chapter: "))
	numChap    = int(raw_input("How many chapters you want to download: "))

	start_urls = []
	for x in range(numChap):
		start_urls.append("http://manhua.fzdm.com/%d/%d/index.html" % (manga, targetChap+x))
		print "http://manhua.fzdm.com/%d/%d/index.html" % (manga, targetChap+x)

	def parse(self, response):
		urlList = response.xpath('//div[@class="navigation"]/a/@href').extract()
		# To pop the last url item, which is duplicate with the index_1.html
		urlList.pop()

		for url in urlList:
			# 加了dont_filter=True的参数就完全可以用了！Why!?
			yield Request(url=urlparse.urljoin(response.url, url), callback=self.parse_image, dont_filter=True)
			self.log("[URL List Yield]: %s" % urlparse.urljoin(response.url, url))

		'''
		5.递归爬取网页
		上述代码仅仅实现了一个url的爬取，如果该url的爬取的内容中包含了其他url，而我们也想对其进行爬取，那么如何实现递归爬取网页呢？

		示例代码：
		获取所有的url，继续访问，并在其中寻找相同的url
		即通过yield生成器向每一个url发送request请求，并执行返回函数parse，
		从而递归获取校花图片和校花姓名学校等信息。
		注：可以修改settings.py 中的配置文件，以此来指定“递归”的层数，如： DEPTH_LIMIT = 1
		'''

	def parse_image(self, response):
		print "[Response URL]: " , response.url
		# itemLoader = ItemLoader(item=ScrapyitemloaderItem, response=response)
		# itemLoader.add_xpath('theScript', '//script[@type="text/javascript"]/text()')

		# return itemLoader.load_item()


