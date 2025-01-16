# FA205_Workshop_3

Website link: https://mremily9.github.io/workshop-task-3/


# Overview
- Collected a series of photos from my digicam
- Make it so that a random/new collage would generate each time the sketch was ran, a 4 x 4 collage
- Looked into making the collage resemble the idea of a photobook/album that was decorated with stickers 
- Added image manipulation overtime 
  - Using filters - filer(DILATE)
  - Getting the colour of a random pixel and making circles based on its colour and position
  - Adding other images as 'stickers' on top of the collage 

  
# Notes
Looking into importing images

![image](https://github.com/user-attachments/assets/a626651f-e6cc-4b6b-aeb3-73e088206f81)

Looking into arrays - with heavy help from the p5.js reference

![image](https://github.com/user-attachments/assets/038fcf4e-f423-40cc-8174-2e5db0491279)

![image](https://github.com/user-attachments/assets/0c6e4549-cd31-4efb-9112-449b1e61b780)

Looking into pixels and the algorithm.

![image](https://github.com/user-attachments/assets/4390d31a-4eb0-4546-9459-90a6d53f51ed)

Examples of what can be done from workshop video 

![image](https://github.com/user-attachments/assets/4295434e-13f7-4355-abbb-0a115be6eab3)

![image](https://github.com/user-attachments/assets/e3d9d057-d2a2-4102-be71-470129d4ebfe)

![image](https://github.com/user-attachments/assets/2c4eee66-76ac-442d-8131-ab98eefe4015)

Comments while following the workshop video. 



# Progress (Problem Solving/Code)
**Importing images**
Compiling images that were taken with my digital camera, I looked into more landscape and still life types of pictures. 

![image](https://github.com/user-attachments/assets/ed432ebd-05ab-4e59-a823-4fdf7aa4f8f0)

I looked into adding in 'stickers', compiling and making the images into .png format. Pinterest images were taken from https://nz.pinterest.com/MrEmily9/stickers/

![image](https://github.com/user-attachments/assets/719756a3-3912-4cc9-b53e-af6490d5ec3f)


**Creating the collage**
I looked into importing all the images and stickers and laying out the images to make it 4x4 landscape.

![image](https://github.com/user-attachments/assets/8670536e-2919-4622-b622-d953bf460d44)

![image](https://github.com/user-attachments/assets/1926b161-8e29-4f39-9043-62849940dcff)

![image](https://github.com/user-attachments/assets/a331e799-9c38-481c-9219-2de67bfbfb41)

Added in random() to the index area of the imgs[] array so that a random photo would be chosen after a new sketch was loaded

![image](https://github.com/user-attachments/assets/ded83f66-a8b8-4be7-b637-04345125a510)

Same thing with stickers - but added in a random scale using a variable

![image](https://github.com/user-attachments/assets/e9c78a3d-22a1-4b6c-8a4d-e17997c73cdf)

![image](https://github.com/user-attachments/assets/1e89afdf-cfe0-4480-a3db-a353b57a6350)

I then added a border by leaving parts of the background open/seen, changing the positions of the images. 

![image](https://github.com/user-attachments/assets/d06ea842-8134-4b87-969e-6fbaf3d8e173)

**Adding fliters** 

I then looked into filters using filter() from the p5.js reference

![image](https://github.com/user-attachments/assets/85e1c730-4469-4280-9cb5-63988d01defc)

![image](https://github.com/user-attachments/assets/dab7e929-0720-43f5-ae69-7f2232088096)

I then added more image manipulation with adding in circles overtime that take a random colour from a random area on the canvas

![image](https://github.com/user-attachments/assets/1d21c4d5-5a64-42e2-bc34-3909461ad07d)

![image](https://github.com/user-attachments/assets/df7e4b5d-7937-4eee-b9ee-26e37d4a514c)

**Problem #1: Loading**

When uploading my files onto GitHub and then creating the GitHub pages, it wouldn't load. I had this Loading... show up before when I was working on this project - this happened when I didn't add the right file names for the sticker images. And so, I tried to debug using the inspect tool on Chrome, which showed that the stickers weren't being uploaded properly and that the sketch was stuck in its preload() function. 

![image](https://github.com/user-attachments/assets/eab462a9-1caf-48ab-b0a8-2a3df35a469d)

After trying to change how I uploaded my sticker images, I started to look online at what could be the issue. I then found a forum with someone having the same issue, with deleting the script of importing the sound library it worked. 

![image](https://github.com/user-attachments/assets/9a4952d0-3bbb-40be-bb12-7d38bd914ebe)

https://forum.happycoding.io/t/having-trouble-with-loading-webpage/1369/4


![image](https://github.com/user-attachments/assets/6e41a074-cd58-4d1c-96cf-658a793f704c)


![image](https://github.com/user-attachments/assets/db68e9d1-a69f-47e2-91f4-c1d4ebece85e)

I then changed the background colour to finish it off!

![image](https://github.com/user-attachments/assets/476f78f5-d61a-4e05-91c3-25b6f5f6a83d)


**Final coding comments**
- Again the p5.js reference is the best resource and tool, with its examples and the workshop examples being very useful for me on making this workshop output, espically the pixel banana example
- Not many issues with coding-related problems and nothing out of the ordinary of what I planned to happen. 


# Future development 
- I'm overall happy with this final outcome, both visually and how it animates out over time
- Maybe look into having the filter not overpower the whole canvas, as it makes the 'collage making' aspect of this project not as clear
I would look into adding in more photos as duplicates come up frequently; maybe look into coding it so that if a picture is chosen, it won't be chosen for the other 3 pictures. 

# Reflection
- This problem I had was very frustrating and took a while to fix, I'm glad that I found a solution online, despite searching and clicking on many different forums that had different answers that werent related to my issue.
- Coding nothing out of the ordinary, especially with the examples given in the workshop. However, this made it feel like I didn't experiment as much, and as such, I would like to experiment more in future workshops. 

