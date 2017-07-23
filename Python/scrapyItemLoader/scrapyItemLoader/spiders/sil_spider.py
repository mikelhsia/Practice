# -*- coding: utf-8 -*-
import scrapy


class SilSpiderSpider(scrapy.Spider):
    name = 'sil_spider'
    allowed_domains = ['test.com']
    start_urls = ['http://test.com/']

    def parse(self, response):
        pass
