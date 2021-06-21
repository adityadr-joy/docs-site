(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{606:function(e,t,s){"use strict";s.r(t);var i=s(18),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"using-redis-as-a-storage-solution-through-the-caching-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-redis-as-a-storage-solution-through-the-caching-service"}},[e._v("#")]),e._v(" Using Redis as a storage solution through the Caching service")]),e._v(" "),s("p",[e._v("As an API developer, you can configure Redis as a storage solution through the Caching service. This article describes how to configure your storage solution for Redis.\nYou can configure Redis for high availability as well as to replicate data to provide data durability and availability.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#understanding-redis"}},[e._v("Understanding Redis")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#redis-configuration"}},[e._v("Redis configuration")])])]),e._v(" "),s("h2",{attrs:{id:"understanding-redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#understanding-redis"}},[e._v("#")]),e._v(" Understanding Redis")]),e._v(" "),s("p",[e._v("Redis is an off-Z storage solution that stores data structures in key-value pairs. The API Caching service uses hash sets, where each\nservice storing data via the Caching service has its own hash, and each data entry is a key-value entry within that service's Redis hash set.")]),e._v(" "),s("p",[e._v("For more information on Redis, see the "),s("a",{attrs:{href:"https://redis.io/documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("official Redis documentation"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"redis-replica-instances"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-replica-instances"}},[e._v("#")]),e._v(" Redis replica instances")]),e._v(" "),s("p",[e._v("Redis can be used with one standalone instance. For data durability, however, a master/replica configuration is recommended.\nRedis replicas automatically connect, and re-connect when necessary, to the master Redis instance and attempt to be an exact copy of the master.")]),e._v(" "),s("p",[e._v("For more information on Redis replication and how to configure a replica instance, see the "),s("a",{attrs:{href:"https://redis.io/topics/replication",target:"_blank",rel:"noopener noreferrer"}},[e._v("official Redis Replication documentation"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"redis-sentinel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-sentinel"}},[e._v("#")]),e._v(" Redis Sentinel")]),e._v(" "),s("p",[e._v("Redis Sentinel is a configuration that provides high availability for Redis master/replica instances.\nSentinel instances are used to monitor the master instance and use a quorum to automatically determine if a failover procedure needs to occur from a master instance to one of its replicas.")]),e._v(" "),s("p",[e._v("For more information on Redis Sentinel and how to configure Sentinel instances with master/replica instances, see the "),s("a",{attrs:{href:"https://redis.io/topics/replication",target:"_blank",rel:"noopener noreferrer"}},[e._v("official Redis Sentinel documentation"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"redis-ssl-tls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-ssl-tls"}},[e._v("#")]),e._v(" Redis SSL/TLS")]),e._v(" "),s("p",[e._v("Redis supports SSL/TLS starting in version 6. For information on enabled SSL/TLS with Redis, see the "),s("a",{attrs:{href:"https://redis.io/topics/replication",target:"_blank",rel:"noopener noreferrer"}},[e._v("official Redis TLS Support documentation"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"redis-and-lettuce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-and-lettuce"}},[e._v("#")]),e._v(" Redis and Lettuce")]),e._v(" "),s("p",[e._v("The "),s("a",{attrs:{href:"https://lettuce.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lettuce"),s("OutboundLink")],1),e._v(" library is used to connect to Redis. Lettuce uses Master or Sentinel node registration information to automatically discover other instances.\nThe IP address used to register between nodes is therefore what Lettuce uses to connect to downstream replica instances. This means the IP address of replica instances,\nor the IP address of both master and replica instances in the case of Sentinel topology, must be accessible to the Caching service. For example, in a master/replica topology running\nin separate Docker containers, the replica container's IP address needs to be accessible to the Caching service, rather than only exposing a port.")]),e._v(" "),s("h2",{attrs:{id:"redis-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-configuration"}},[e._v("#")]),e._v(" Redis configuration")]),e._v(" "),s("p",[e._v("Configure Redis as a storage solution through the Caching service by modifying the following configuration parameters in the Caching service "),s("code",[e._v("application.yml")]),e._v(".")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[s("code",[e._v("caching.storage.redis.host")])])]),e._v(" "),s("p",[e._v("The hostname or IP address for the Redis master instance")])]),e._v(" "),s("li",[s("p",[s("strong",[s("code",[e._v("caching.storage.redis.port")])])]),e._v(" "),s("p",[e._v("The port for the Redis master instance. Defaults to "),s("code",[e._v("6379")])])]),e._v(" "),s("li",[s("p",[s("strong",[s("code",[e._v("caching.storage.redis.username")])])]),e._v(" "),s("p",[e._v("The username used for authentication for the Redis master instance. Defaults to "),s("code",[e._v("default")]),e._v(". Not required if authentication is not enforced by the instances")])]),e._v(" "),s("li",[s("p",[s("strong",[s("code",[e._v("caching.storage.redis.password")])])]),e._v(" "),s("p",[e._v("The password used for authentication for the Redis master and replica instances. Not required if authentication is not enforced by the instances")])]),e._v(" "),s("li",[s("p",[s("strong",[s("code",[e._v("caching.storage.redis.timeout")])])]),e._v(" "),s("p",[e._v("The timeout duration in seconds for the Caching service when first connecting to Redis")])]),e._v(" "),s("li",[s("p",[s("strong",[s("code",[e._v("caching.storage.redis.sentinel.master")])])]),e._v(" "),s("p",[e._v("The Redis master instance ID used by the Redis Sentinel instances. Required if Redis Sentinel is being used")])]),e._v(" "),s("li",[s("p",[s("strong",[s("code",[e._v("caching.storage.redis.sentinel.nodes")])])]),e._v(" "),s("p",[e._v("An array of the Redis Sentinel nodes. Each array element must contain:")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("host")])]),e._v(" "),s("p",[e._v("the hostname or IP address of the node")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("port")])]),e._v(" "),s("p",[e._v("the port of the node")])])]),e._v(" "),s("p",[e._v("If the node enforces authentication, the element must specify the "),s("code",[e._v("password")]),e._v(" parameter.")])]),e._v(" "),s("li",[s("p",[s("strong",[s("code",[e._v("caching.storage.redis.ssl.enabled")])])]),e._v(" "),s("p",[e._v("A flag indicating if Redis is being used with SSL/TLS support. Defaults to "),s("code",[e._v("false")])])]),e._v(" "),s("li",[s("p",[s("strong",[s("code",[e._v("caching.storage.redis.ssl.keyStore")])])]),e._v(" "),s("p",[e._v("The keystore file used to store the private key")])]),e._v(" "),s("li",[s("p",[s("strong",[s("code",[e._v("caching.storage.redis.ssl.keyStorePassword")])])]),e._v(" "),s("p",[e._v("The password used to unlock the keystore")])]),e._v(" "),s("li",[s("p",[s("strong",[s("code",[e._v("caching.storage.redis.ssl.trustStore")])])]),e._v(" "),s("p",[e._v("The truststore file used to keep other parties public keys and certificates")])]),e._v(" "),s("li",[s("p",[s("strong",[s("code",[e._v("caching.storage.redis.ssl.trustStorePassword")])])]),e._v(" "),s("p",[e._v("The password used to unlock the truststore")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);