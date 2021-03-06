# Created a Full Stack Package that adds emails to a back end and shows the number of referrals used by each user.

Hello, 
I have created a package using Node for backend and react for the front end. Please run npm i after "cd"ing into both folders to install all the packages.

This small package creates userID's, emails and a count of referrals used by each account. All the results are shown in the package, but I admit, after creating the whole structure, the package can be cleaned up a lot more, and may be used in a better way. 

For ID's or Referrals, I used an external package, "uuid" to generate a code that gets saved to the database. This id can be used to create a new account, which will, in turn, will generate a new  object with a newly generated ID, name and referrals, which will be set to 0.

Each referral used on a new account will increment the referralCount associated with the id. It can be visibally seen incrementing every time it creates a new object. 

I didn't bother much with redundancy since it was taking more of my time when I attempted it, so an email can be created multiple times. 

I also noticed after creating the whole thing that I did not add a tracer to the referrals, so emails will be able to trace who referred the email. I would love to discuss more about this over the phone or via chat. Please don't hesitate to contact me at (347) 600 4353. Thank you for your time.

Best,
Saadat Taaseen