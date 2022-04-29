// 听歌打卡

module.exports = (query, request) => {
  id_a = query.id.split(',')
  id_l = id_a.length
  sid_a = query.sourceid.split(',')
  sid_l = sid_a.length
  t_a = query.time.split(',')
  t_l = t_a.length
  buf = []
  
  for (var i=0; i<id_l; i++) {
    buf.push({
      action: 'play',
      json: {
        download: 0,
        end: 'playend',
        id: id_a[i],
        sourceId: sid_a[i%sid_l],
        time: t_a[i%t_l],
        type: 'song',
        wifi: 0,
        source: 'list',
      },
    })

  const data = {
    logs: JSON.stringify(buf),
  }

  return request('POST', `https://music.163.com/weapi/feedback/weblog`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
