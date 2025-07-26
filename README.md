# Catching COVID 😷

During the COVID-19 pandemic, scientists raced to understand how the virus was being transmitted and journalists worked hard to bring evidence-based information to a public fearful and desperate for answers. 

I was one of those journalists.

In this project, I've taken [a summary figure](https://www.bmj.com/content/370/bmj.m3223#F3) from what in my opinion was one of the seminal papers from that time and reimagined it as an interactive quiz with which people can calculate their relative risk of catching COVID from someone not showing symptoms, thereby making the information more accessible to a general public audience.

Take the quiz yourself by going here: https://zthetrain.github.io/COVID-app/

## Reverse-engineering the logic behind the figure

Twelve different variables are presented in [the figure](https://www.bmj.com/content/370/bmj.m3223#F3), grouped into five categories — or in the case of my quiz, questions — based on the setting, number of people present, whether they were wearing masks, how long they were in contact with the infected person or people and whether they were silent, speaking, or singing and/or shouting at the time. This gives a total of 72 possible answer combinations. 

I tried assigning numerical values to each variable to see if I could come up with discrete ranges of combinations that were equal to the low, medium and high risk classifications, but if this was the way that the authors of the paper originally prepared the figure I was not able to replicate their work.

Instead I used the [itertools.product function](https://docs.python.org/3/library/itertools.html#itertools.product) to generate all the possible valid answer combinations based on the underlying logic of the figure and then manually matched each of these combinations with its corresponding risk level — low, medium or high. The two borderline cases between low and medium risk in the figure I have represented in the quiz as a fourth category — low to medium risk. This data was turned into a json file that the quiz referred to in returning the risk level of catching COVID posed by the combination of conditions selected by the user.

## Skills gained during this project

This is the first interactive app I have built, the first app I've built using Svelte and indeed working in JavaScript, so it has presented an intriguing challenge to get used to a new language and framework and understand how a web app is developed, built and deployed. It's also the first time I've used a CSS framework, in this case Tailwind CSS, to style the app and broader page. Again this presented a learning curve but is a very useful skill to become proficient in.

## Things I would have liked to do

I'm happy that I was able to replicate the functionality of the figure in my quiz and with how I've styled it. In terms of how I could improve a project like this in the future, I think increasing my proficiency in CSS will allow me to build apps of increasing sophistication.
