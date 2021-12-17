self.addEventListener('push', function(e) {
  console.log("e",e);
  let data = e.data.json();
  // var options = {
  //   body: 'This notification was generated from a push!',
  //   icon: 'images/example.png',
  //   vibrate: [100, 50, 100],
  //   data: {
  //     dateOfArrival: Date.now(),
  //     primaryKey: '2'
  //   },
  //   actions: [
  //     {action: 'explore', title: 'Explore this new world',
  //       icon: 'images/checkmark.png'},
  //     {action: 'close', title: 'Close',
  //       icon: 'images/xmark.png'},
  //   ]
  // };
  var title = 'Samsung.com.';
  var body = 'Order :'+ data.po_id+ " status: "+ data.event_type;
  var icon = '/images/icon-192x192.png';
  var tag = 'simple-push-demo-notification-tag';

  e.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag
    })
  );
  // e.waitUntil(
  //   self.registration.showNotification('Hello world!', options)
  // );
});

self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);

  event.notification.close();
})