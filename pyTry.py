#library for requesting urls
import urllib
#dir(urllib)
from urllib import request

# Needed this to bypass SSL issues. I think becuase its an http not https site.
import ssl
ssl._create_default_https_context = ssl._create_unverified_context

#dir(request)

# Base URL to access, would make this dynamic but for this purpose it can be static
base_url = 'http://www.irs.gov/uac/Authorized-IRS-e-file-Providers-for-Individuals'
#base_url = 'https://www.wikipedia.org/'


# Make the request
resp = request.urlopen(base_url)
#type(resp)
#dir(resp)
print(resp.code)
print(resp.length)
print(resp.peek())

data = resp.read()
print(type(data))

html = data.decode("UTF-8")