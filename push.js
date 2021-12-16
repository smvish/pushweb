var push = require('web-push');

let vapidkeys={ publicKey:
  'BImZRyVQGkcVCK_O17KXzBLC1mDwWIRkI5dxxcEXpFtWmSpLyVRg39AX-EIwJ2my6Mf7I1Gn7rmCWK2dLdDSamM',
 privateKey: 'Nv9VAsOLZtP4GlP9aDoNoAYP6-srZK5OHHPK9Ke3xNA' }



 push.setVapidDetails('mailto:test@code.co.uk',vapidkeys.publicKey,vapidkeys.privateKey);
 let sub = {}
 push.sendNotification(sub,'test message')
