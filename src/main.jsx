import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'
import { Data } from './components/Data'

let students = [{
  name: "Krutika", age: 22,
  course: "UI/UX Designer",
  description: "I’m Krutika Mali, a passionate and creative UI/UX designer dedicated to crafting seamless and visually appealing digital experiences. I specialize in designing intuitive interfaces that focus on user needs while balancing aesthetics and functionality. My goal is to turn complex problems into simple, user-friendly solutions through thoughtful design and a deep understanding of user behavior.",
  url: "https://listium-res.cloudinary.com/image/upload/w_800,h_800,c_limit,q_auto,f_auto/mybtct2ssxqfdlxbawqg.webp"
  , github: "https://github.com/Krutikamali01",
  linkedin: "https://www.linkedin.com/in/krutika-mali-9710b3233/"
},
{
  name: "geetu", age: 22,
  course: "UI/UX Designer",
  description: "I’m Geetu, a passionate and creative UI/UX designer dedicated to crafting seamless and visually appealing digital experiences. I specialize in designing intuitive interfaces that focus on user needs while balancing aesthetics and functionality. My goal is to turn complex problems into simple, user-friendly solutions through thoughtful design and a deep understanding of user behavior.",
  url: "https://w7.pngwing.com/pngs/665/604/png-transparent-baby-boss-boy-character-illustration-the-boss-baby-brother-dreamworks-animation-film-the-boss-baby-child-toddler-boy.png"
  , github: "https://github.com/Krutikamali01",
  linkedin: "https://www.linkedin.com/in/krutika-mali-9710b3233/"
},

{
  name: "Sumit", age: 22,
  course: "UI/UX Designer",
  description: "I’m Sumit, a passionate and creative UI/UX designer dedicated to crafting seamless and visually appealing digital experiences. I specialize in designing intuitive interfaces that focus on user needs while balancing aesthetics and functionality. My goal is to turn complex problems into simple, user-friendly solutions through thoughtful design and a deep understanding of user behavior.",
  url: "https://w7.pngwing.com/pngs/665/604/png-transparent-baby-boss-boy-character-illustration-the-boss-baby-brother-dreamworks-animation-film-the-boss-baby-child-toddler-boy.png"
  , github: "https://github.com/Krutikamali01",
  linkedin: "https://www.linkedin.com/in/krutika-mali-9710b3233/"
}
  ,
{
  name: "Ravish", age: 22,
  course: "UI/UX Designer",
  description: "I’m Ravish, a passionate and creative UI/UX designer dedicated to crafting seamless and visually appealing digital experiences. I specialize in designing intuitive interfaces that focus on user needs while balancing aesthetics and functionality. My goal is to turn complex problems into simple, user-friendly solutions through thoughtful design and a deep understanding of user behavior.",
  url: "https://w7.pngwing.com/pngs/665/604/png-transparent-baby-boss-boy-character-illustration-the-boss-baby-brother-dreamworks-animation-film-the-boss-baby-child-toddler-boy.png"
  , github: "https://github.com/Krutikamali01",
  linkedin: "https://www.linkedin.com/in/krutika-mali-9710b3233/"
}
  ,
{
  name: "Suraj", age: 22,
  course: "UI/UX Designer",
  description: "I’m Suraj, a passionate and creative UI/UX designer dedicated to crafting seamless and visually appealing digital experiences. I specialize in designing intuitive interfaces that focus on user needs while balancing aesthetics and functionality. My goal is to turn complex problems into simple, user-friendly solutions through thoughtful design and a deep understanding of user behavior.",
  url: "https://w7.pngwing.com/pngs/665/604/png-transparent-baby-boss-boy-character-illustration-the-boss-baby-brother-dreamworks-animation-film-the-boss-baby-child-toddler-boy.png"
  , github: "https://github.com/Krutikamali01",
  linkedin: "https://www.linkedin.com/in/krutika-mali-9710b3233/"
}
  ,
{
  name: "Harshu", age: 22,
  course: "UI/UX Designer",
  description: "I’m Harshu, a passionate and creative UI/UX designer dedicated to crafting seamless and visually appealing digital experiences. I specialize in designing intuitive interfaces that focus on user needs while balancing aesthetics and functionality. My goal is to turn complex problems into simple, user-friendly solutions through thoughtful design and a deep understanding of user behavior.",
  url: "https://w7.pngwing.com/pngs/665/604/png-transparent-baby-boss-boy-character-illustration-the-boss-baby-brother-dreamworks-animation-film-the-boss-baby-child-toddler-boy.png"
  , github: "https://github.com/Krutikamali01",
  linkedin: "https://www.linkedin.com/in/krutika-mali-9710b3233/"
}
  , {
  name: "Krutik", age: 22,
  course: "Data Science",
  description: "I’m Krutik Koli, a passionate and creative UI/UX designer dedicated to crafting seamless and visually appealing digital experiences. I specialize in designing intuitive interfaces that focus on user needs while balancing aesthetics and functionality. My goal is to turn complex problems into simple, user-friendly solutions through thoughtful design and a deep understanding of user behavior.",
  url: "https://w7.pngwing.com/pngs/665/604/png-transparent-baby-boss-boy-character-illustration-the-boss-baby-brother-dreamworks-animation-film-the-boss-baby-child-toddler-boy.png"
  , github: "https://github.com/Krutikamali01",
  linkedin: "https://www.linkedin.com/in/krutika-mali-9710b3233/"
},
{
  name: "Senorita", age: 22,
  course: "Cloud AWS",
  description: "I’m Senorita, a passionate and creative UI/UX designer dedicated to crafting seamless and visually appealing digital experiences. I specialize in designing intuitive interfaces that focus on user needs while balancing aesthetics and functionality. My goal is to turn complex problems into simple, user-friendly solutions through thoughtful design and a deep understanding of user behavior.",
  url: "https://img.freepik.com/premium-vector/beautiful-professional-cartoon-character-design-vector-illustration_1253202-271170.jpg"
  , github: "https://github.com/Krutikamali01",
  linkedin: "https://www.linkedin.com/in/krutika-mali-9710b3233/"
},
{
  name: "meghna", age: 22,
  course: "UI/UX Designer",
  description: "I’m Meghna, a passionate and creative UI/UX designer dedicated to crafting seamless and visually appealing digital experiences. I specialize in designing intuitive interfaces that focus on user needs while balancing aesthetics and functionality. My goal is to turn complex problems into simple, user-friendly solutions through thoughtful design and a deep understanding of user behavior.",
  url: "https://i.pinimg.com/736x/13/01/96/13019680fe1753721bf5f481f7d08bce.jpg"
  , github: "https://github.com/Krutikamali01",
  linkedin: "https://www.linkedin.com/in/krutika-mali-9710b3233/"
},
{
  name: "Jessica", age: 22,
  course: "Data Analysis",
  description: "I’m Jessica, a passionate and creative UI/UX designer dedicated to crafting seamless and visually appealing digital experiences. I specialize in designing intuitive interfaces that focus on user needs while balancing aesthetics and functionality. My goal is to turn complex problems into simple, user-friendly solutions through thoughtful design and a deep understanding of user behavior.",
  url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMVFhUVGBYVFRUXFRUVFRUVFhUWFhcXFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGislICYtLS0vLS0tLy0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLf/AABEIAQsAvQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAQIHAAj/xAA/EAABAwIDBAgDBwMDBAMAAAABAAIDBBESITEFQVGBBhMiYXGRocEyQrEHI1Ji0eHwcoKSFBUzJKKy8RZDwv/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFAAb/xAAwEQACAgEEAQIDBwQDAAAAAAAAAQIDEQQSITFBE1EiYZEFFDJxgbHBodHw8SMzQv/aAAwDAQACEQMRAD8A51DqjQ1BwDNMmNRkKyIXx5IRwsmb2ZICZm/gqWMJThvkgkWi3k18votEs+zQgsRMFRgm6kK1soLHivLy1Kkg8onnyW+JaujXHEZK8Mys4MlorHE5eAh15YXEGVgleXlJx3PovLHQUlHDNN1rp5OrjdH22NdJ2msDh8ova/foBpbzGFwTZbaanhiqaeoe7aDZGlsAiL43FxIwWLbl2A5uB1NhnYju1AZDFGZg0SljOsDfhD8IxBvdiujwkJWww8khjCic0KZ5Qr3oiAM1ewIKvjHZ5+yJMigrT8PP2UlV2fP9NV3cFY4W5JFQ0gBCssDMkJF7MeCNzMkBKAL30TksySirZZwNiQL5DjuyVJsmlZYrXisk3WqXNQwSsFGbEpOtlDXDsi7ncLD97JtKICSOpy4g5/RUlNReBzT6KV0XJPBXbrBTp+yY3/8AHJhP4Xj3CXVmzJoxmwkcW9oemilTiwduktr7X0AJBY3XpdFsxhkcGNF3E2ATP/Z2gWkl7W8MFwPElWckuylWnst/ChQZeGS1YwuIDQSToBmSi56CxydlxsnNK9kLAIrYnAFzzbF4BQ7ElwHr0FkpYlwgSHo1JhxSvZGDuObvL9152w2bp28xb6FSSy3N3G54k3KGlmvkEPfJj/3OiK6z+oHV0WDR7XjiL+6ETEhLyLZI0JZMzVUxraceiegrZIJGyxOLHsN2uG4943juX0bsLaP+opoai2EyxseW7gSMwO69181FfQXQaWE0bGQF74ovu2yuGHriO097B+HG5zf7Ta4F0eszb1wmOZpEI+Rb1RQMkiYSEmSF6xVOybz9kP1ixUy5Dn7KzXBVdnHacZqwU7MlWqCoBsrZRtuAlsl5o26vJLahtrnhcp6I0srIviztkc9wQ5smvsqS8VJO0AmxGp03KJxyQjVHOxOzBJJvcQweGp+vovLNC7/pm/1uv5LCVm8yZ6bSwUKoo1K3ZO5vwuI5qKSQDUhQmov8LSfooSCuSQZHP96xxte9iQLXvcC/NDSm1yoZXOIN2277jLvUbqkkEHU6lXSAuaRtUvFh5oYLBetWyK6WELysTZIvLAKypOMIGY9o+KOKEq4cDrbjmD3FXh2Ja3O1fmSbMppJZWRwx9ZI42YyzXBx1zDuyQLEnFlYG+S+jKGCWOniZMWulbG1shYA1peGgHCAAAL8APAL5+6MxymqgMBc2TrGNa8AmznGwyGote44A7rr6VqWiyZrMS/wIKh6Amej6zIpTUPTURGRgSLapdkOfshmuzUk5yHP2VmVRxGjgdkV0TZAuwKqULAWhXPZEfYCRD2vIYyNKtqUjnfC7C4aG1wdxBB3foFYYo0JUxZoVj4IqeHkokmzZWXBYbjQgBzSBvvpbQ33JW7UjwXRNo0ZcxxBeMLHk9XbGQG4iBfjgtlxVFqKJzSMTXNvmMTS12HOxIPGxVIyyaUJbkTbMkcR1TW4i44gOBtYk8BZOXU0bB94+7vws0HiShqFnUR3+d4uT+Fu7wS6orDo3z/RAay+D1FctkFu+gwknaPkaO83P1QUtYzjfwH8CXPJOZN1qVdVg56l+EEyVJfkBlrxyG89yHe2510V06IbFwN66Qdpws1p3MO8jifp4prXbEgl+JvMZHzVPXjF4wJXVzuWcnMg3UrIXRG9HKcCwYLd9yfM5rZ2xIdcAvoDYZbuCl6mL8FKtNOD7RzsKRrk42zsIxkmPMa4eHhx8EmsrqSksoaw0bqean6yLvaCRy1HkEOCmdEMOG/H3U5wdOG+DiM/sm2kYq+OMRsd112EloxsbhLsTHat0z4jwXbNoOIVN+yTo5AyI1mE9a50kYv8LGscWnBxvbXxA33uG0SnKzy9z5ENXIlFRImFeUjqHpqIlImjeiJ3ZDn7JdE9FTPyHP2VpER7OSbKndcALpWw2ksF1Rti04sF0LYjeyEgHtYzijQtTHmmcTEPVMzQbeiIA0LbZhV7pRTwukaMR6/C4lvaIcwtebkkWvdtteStMbFBtHZ8bh1zm3dC1zmnkeyeLSTa3elU8PI5p/8AsS+ZzHaFUXuPD9EJZWSeoja0Wpqe5uc4ybD/ACVcnrHvvo0HRrGtYPDshGgsrg9HqbvTfxeTR+WuvDf+ytvR3o0LNmnFyc2xnRo3F3E77LXox0fYMMswu42cxpvZu8Fw3nu3K1zTsb8TmjxIH1QLbf8AzEHBSn8U+vb+5ssFYY8EXBBHEG4WSlRg1K0K3K0kcALkgDiTYeakkGrIcTTxGirVZs1j8/hdxG/xG9PKnbcDb9vEeDQXeunqq3UbZAJIY4jxA+l0aCl4KO2C7YgleQbaFpz8QnFE8SAfmy8Hfz6qKshjnY6dhIc0dptt4G/gbb0HsqWziOOY8R/PRN8SiK1WzhdiTyn1/B9FdE5mmhpy0ADAAQPxAkP54g481rtB6B+z+USULCDo54I4EnER5lFbQFk5U8xRh6uO22SXuyv15SSdOa1KJgmYmfIiiCJl0HP2UUTUTM3Ic/ZWbIXZzzYJu0LoOw29lco2TtHq8l1HonVCRlws9sYsi0WOJqgqmIyNqjqmoVnREQVjVptOK9PKOIaD4YwfZEMatqpt4ZR+S/8AiQfoClGPaN4vg/mjk23ZPiA/pHh/LoTYVGZZmNuAGkPJ32ab5eSI2w3U/naPQu9gpehzf+pPAMcfDMfqmM4rbRr6l79VtZaqvrXdiLs/ikOje5o+Z3oEtk2HGM+seXHVxtme8fumtfVBjSXGwGZJVV/+QOleWwRSSka4GF1u88AlIKb/AAjM/TXNjCJNkSDNhBI3tOB3l+6Z9GKie8jJi84cJZjGeeK+ZF3DIZpbDtVzHiOZpiebWbIMN78HAkKw0s2Vzu17lM3JLEkVhCGd0GHpXt+i62O17YTivroCCPVM7oPaROBwG8WQovDDNJrDKoKZg1z9Postjj/A3yCLjoJJC4RBpwDFLK8kRRNtftWzc62eEbszZVCq2pI1xwzXF8uw1tx/TY25m6ajCUhay6qvjBZ4qFoPWR2HyyN+VzToRwIPLVVu3VyWPyuIPhp9E12BtYvDmPtitcEaEAj1zS3aTbSv8b+efuiVJqTiwGolFwjZD3/z9jq32TbQIM8G4gSjuIIafO7fJXGvVL+xykJZNOeDYh/5O/8AyrtWtTlHRmfaDUrW17L9iu1gSqVqd1bErmYm4mXIgiGaKmGQ5+yhiaiZhkOfsukdHs49snZRkzXSuhFOWNIPFUfovtBoOFy6fsJotcJB9h7JPpj2MKOpap4wtakIc+isQVgU8Qz0uDkRxBFiPIrRgWK6o6qIuBs51wDwaBdx9QOaUk8IaorlZNRj2c96WdHJWRyZXwSYr3BJjEcnaLQbjRuv4ku6FFoLs+2RmN+EW/nNWCXbBBPYy33O7v3Kr0M8UdZ90Ow6wbwFwC4DPT9FKk5VuJvTg43qyWOeCfpZHJUTwUkZzlcCeAubXI3gDEeS690d6PU9PCI2tIY1t8rYnG2ZdxcVQIKVoraWpJAEbi199MD2uaHci6/hfgup0sosP5zCNS1sQjrIyVryfOHTrqm1UgppXSwuOJspN3SEtaXYjYXs4kaWVh6B1zpYi1+ZZ2bne06X8iOSt3Sn7OYpZHSQyiMPJc6NzMbQ46lhBBbvy78rDJL9n7FjpiWRnFYND3WAu8FxOQ0ADhkq3P4MNBNM825T8BVM7s23tJb5Gw9LHmoK89krYHCX97rj/Bo9lh3aCTNVLguvRvZggpWtDGveWFzg74ZJXDE7ETewLjbfYW4LiH2gV0tZVGUwNhc1vVOjFgQWPeRjFh2gHBuX4brrdJ0uZG0CZj22AGJrXSNNha9mjEDlwPigNubf2ZMcZhE8tsj/AKZ2I20DnyNAt3OK0VPjMWYTqluanF5OTbLonMlivvjx/wBpLmA+F2qSrjMs+CMXc4ho7yBYnuH6K1V7jI90zmhpIawAbmgmwv8A3HzSfZzhDUOaw/G2/HCQSbeG/wAkNWctr2Hvu7VcYPjL/wBHYvs5oBBQtZljxOLxlcG9hfxAumtU1UnortNzZWZ2BIa4biHaG3O/JXypamNNZujj2M37QoddmfDEVTGlc8aeVDUunYnkzLkhcxmamnbkOfspGxraoZkOfspZEVycV2bs5xlwjiuw9HacsYAVRaRoZVW4ldH2eMgkWEslkaRhYqBkto16fRUl0VQMwJb0ouYR3CQf+JPoUzYsVlP1kZbbPUd+ViOY+gSc1waGhsULk2c5rKiIsvI7CbYfhcQ7LLNt7GyT7IgY4xuDbFjrH8xyzPmrHLsp3WCMMDg84W4hcXJt2uBC3h2eyOaODFGSLtIY4GznBxZca5kjM8VVSSjhHoJRzNN4wl+pKTuWscT2m8cskfcx7g3Piz4T5KergLSMvia13mM/W45KNhQlJroZlCNkeeSUid4s+olcPEN9WAKWGFrG2aLALEZW8rA5padHAtPgRb3XOTfbAKuMPwrBHGxsgvjs21wQL38EPK/q9xcM9NbAXvbwWG00rcw8OsLWLbZDvul8ssjn5nMGwA0BUpBE3jA3BBAI0OYQs1kTFFgYGj5QAhpmqCYIVbYxGMhhAcdCg+j1Ixge54u/IOubm5NwB3HW/d3I6tbdwHD3RmzGDA1sEcbpDJeYyDEOqIOJwudwG7MWyRFLEcFbYLcp+wd0bjL5m/mkZ5A3PkF1KrjVd6E7BLT17mkMAPVA6m/zHl9VaKpt07pItJyfkw/tK1TmkvAiqGoCRibVDEDIxaCZkNAQjXqlmQ5+yJDF6qZkOfsukyEjjG1NptFUHNOV11TYVU2RgIIOS4DNDI12YN10j7MWyh5LgcBblfRKtF5xSR1GNen0WGLNRoqS6BIFYVOwoVhU7ClQiJDRtkcDo7UOGTrjTuPMFV2v6MwPqQ5oe2WVwYXNNm47i5IOnym4HFWmlPaCdDZbHSRzb2EutxOEtH19Ao9Fyw4/qaWm1koJqTfXBVelGxHxxRuc7GWgtc7eRe4ubC+Z1sNVVxEuxVMDZGlrhcFc527sZ1O/S7D8LvYquop2PK6NDQ6vctkuxOxi9I8NF3EADUk2AW6B2ls1kws6+QOHPsg8S3el0aHb5FdR0shBLWtkI/GA0eTXajxsg2dIoGuxBkjidS7C219bAE/Va1ey42hrSzC/eTk094coqPZ5ccLGjvPyjvJRtqGfSjjJZ6KvjmF43A5AkbxfiN2ikkA1K0paNkYGEC4FsVrE8b81FVFz3NhjBc95sGjU8B/NwKHjL4F+E+Bv9nuy+vqzK4XZCMZvoXm4YPq7+1XXpBsW7muiFr3Fmi1nOBAdl3lGdE9iCjpxGbF5OOQjQvO4dwAA5X3pwU+tOnXtZg36tu5zj10RRxYWho3ADyFlFM1ElRPamVwIvkT1EaCkiTqaJBSxIiYNoWYFHWNybz9ka5qGrR8PP2VmyqRS+kGxYLtc4AZhWLZlOxrBhAtZLulHRyacjAbAJvsnZ74og1+ZAtdKA3F4CWr0+i8AvTaLn0VQCwohhQjTmiYylmXQbTnMK1Up7IVSpzmFa6I9kI9IaASoamnbI0teAQVMvI7SfDLp4eUc02tswMe8RnEGHtN+Zo423t70qTPpI8iqkLSQQ7Ig2IyGhSaTaAvaUWJ0kaOy7+po0PePJYzXPB6Wpy2Jvng9PTtf8QuOG7yWscDW/DkOFzbyW5nZqJGH+4D0NihKivaNO0e7TzXchUwyGJ8j2xRjFI82a24FyASSSdAACT4LofRbovHSAvJD53fHJbT8sY3N9T6Dm/Q+oJr6dxPzkf5Mc33XaE9pYLG7yZf2lbOLUF00eWFleTZkmq1IW6wuOIHsQ00aOIUEzVJwnlaga35efsmFQltcfh5+yuU8hx2i1QS1zTkEnW8QzS2QLkw4L0wyWWBbSjJcygmvmiYyhnaqeNLssgyE5hWzZ57IVRh1Vs2aeyEWnthoBiD2ztBtPC+VxADGk5kAXAyuTkEW94AuTZUXpntVs4NOADH8/B1tB7q11qgvmOaah2zS8eSjy9LI3vJqmOgkdmXD72F2mbXNzA8A4d6lFXBKLNljeDuDhf8AxNnDySfaXRiwPUuLQfl1b5fzwVaqNjSg2LAfAj3skEoyPRqCS4ZdJNnH5M+7/wBIGoGD4yB3kiyB6KbOmAqy2KTF/pZGsLQ49svjFmkfNgL+/VIv9mncbFhbbLtmxHiNfRXUF5ZG55aG46TdVLG6E5se13WWuG2Ooafi5+q+mA4HMZg5g8RuXzFRbBY3OQ4jw0b+6630K6agBtPVOtazY5TpYZBsh3W3O8+JYpsjF7TO19E5pTXg6GvLAWU0YxgrCysFccYKikGSmUTwuOE1Xqldefh5+yb1rUnr93P2V0UYBjHEKSJ4vquRVe1qtkvVXN72Vz2FRVHZdI4pZ8AXHBe41tIMlpTDIKZwyUkCKQdpEQxE6DnoPNMtn7NBON4/pHHvKNrqIPGWThpw8EvJSw2g9VSbW94QncWsF3PaM7fMfoESzpXFG2wxnv6t1ko6uQPfDMLsPaY8AAsPAjnkd4QFTTlhsdNxGh/nBLK6SNqrQ0r5hG0+k/WkjrsI4Fj2f9xuB6Je118wQe8EEeYWS0HVQupGagYTxb2T6IbeezQhCMFhG5UUkYOoB8QvYHjRwcPzZHzH6LblZcXFfT6qqYTBFTmRkHVtc10WJuOQk4rubqe7vRG0WvdDSPnFp3tPWZWcWgjAXjc63vwR8dZKwWjkLRws1w9dEmqZHGXE9zpHbzv8ANwRHLJEY4wiSSnaRpZAyxFqYGU/gd6fqo3vJ1YbKEXDdhdLKmls1rscY/8ArfctA/KdW8su5XKg+0iB1hNFJGd5baRvs70XNHgbr81mOEuNgjRulHpi9ukps5kjtNL0oo5BibUM8CS13+LgD6JhTVkcn/HIx/8AS4O+hXF4mtiHaIBJAvxPDwU1HA5splxkH5bEjCBw70eF8pPGDNs0dcU2pfU7Qo3qs7C6VB1o6ggHQSaNP9f4T36eCs7k0zOawLK0JJtAac/ZPqsJLtFvw8/ZXRRnOKyBn+ubcZqybbmMcYwqjba2mG1wN9CAuisjbNGPBJtdAWg/ZMmKNpPBN6eC+Z0QGzKawDRoE6AVu+C9cfLPLy8vKQxDUU7Xizh4HePBV+v2bOxwLS18Zyc0jMDiCN/ccslZitQ5CspjP8xinUTr66KVU00Yt2g0nIAkWJ4C6gkonjdfwVtrtnwT3a9rXW8LgoJ+xcLMETsIAs2+Zb53vzSktPNdcmhXrYNc8P5lXewjUEeIsoiE/hoKlhIkLZG7iAA6/eBlZCV7HtOVMXjebhpB5jNDcZLtDUb4t8NfUTSR33keCijgDdNTqTqU9mihAJw52vYEgnuF8kJT9U42LHtyvclpHh2brky/qLAuIWj+4E/zimddBp1Nr54sTXHwtYeKxJTEsF2gO3kXwnPdfusiRhKXSZSWojFZyhI2kue0QN9hqpH42kMiZrmXHQfqUTBs1jXF+Zcb5knfuHciwE3DSt9itmsXjkH/ANI0kOcASNO5TlYL1mQWNufJNQjGHCE5ylPlmE32Pt+WDs/HH+AnT+g7vDRJ333arWN9/EajeEXAJrJ0iCtZOzHGbjeN7TwI3FA7Rb8PP2VPoa18LsbDY7xucOBCsX+/U8rQS9rHC4c17gLHLQn4gqNqPYGVb8HzdV1cjn4nXvqrl0M23WSyR08QLiTyAGpJ3AK3bT6FwyvGFoFtbaWT3Y1LHR5QMA/E4jtP7jvA7kpbfCK5OqrdvSLdRU+BoBNzvPEqR78wBqfQcSkdR0iLRfAL7hiOZ8lPsvaYOUgwvdqb5dw7lWN9fWQjomlnA4AXl5Q1U4Y2+/d4owIz14uRw+Lu4LSQ4HYvlOu+xG/wQ9O0s7TtJPi7j8t+62SJwub8OY4XzHgd48VBfGASmEbXZOxF2Qtu35lGFRB7r5MtxJt9BqpSugsEzeXlmpWjluoZ3WaSrlCGqLQLloKijiY4XwhZxjIO+F2YPA8Fu8hgy5DiVVN5+QXCxjyaGNo3AbtFrPEHNIWldGTE4Xzte/AjO45rFDUdZG1+8jPucMiPMFXXWShWpmWJCwI7gkbtUVtVoEhtvzUNHLhdnociip8ZCAZ14fRFUYa8GM/GM2HiN45e6xWwYHEajUd4QokLCHtBu038eI5hQ0WzlEjmFpsdVG+O+eh3H+ahOK2NsjOtuBcAjwOnNVqoqnG4GX1Q5Xxgue/YvCtz6J5KoNyPxbraH9PBKqjdzUtkZDQgtDni99PDik3OV0hnaqole230knZOHdpoB7xdXrY/Sds0YOptoc0H0r2IyYtFhe6Kh2ZFSQ3A0CYkk10YKljosG0tlxgGQXBaNPl8t3JLE62jMHU5e05Oa1w8HWI+qSNaWxsfa7XDMcDpySs9OpRzHs1q7WuxnRbXMYs/tNG/eB7hYi2vFNJc4g0cRu5XSKrqGuGHtDicvopqUNDeyQeJ/Xgqb7qo8ov6dU3wXZkjXi4IIPMKI034XOb3A5eR0Vco6t0Zu3TeNx/nFWKjq2yC7dd4OoRqro2cPsXsqlX10RxH7wtuTZup4kj2st6h9gM7XyvwO66FoXXlkP8ANUTLURjJzm94JHqExLCBLOTSnZa+RBOZzuL9yjrj2fP6FSRws+JuY3WNxyUdf8Pn9CpidJ5YPTi8YI7Q3t57uBXgWNzAN9wsb+qxs9hwAg2Od+B8f1WXzOOQwA/1A+irLCYSPJsxuuLU69w4JTsd+F0sRJGF2Mb8nZHLhceqcsjwjid54pHVnqqpr9zuyfB/6OARILjBRvkG23k8G4N25AeKBKZdJJ2NLTkT2hlmdyrz6524Aeqp60ILDf0GI1yn4H3/ACxfmZn4tS17wBc6IWl2jIx179xyGhUVcCTe9wfTkhvWRXCQSOmeeWGbPqi4Fm5ubR+U/uo6ynvmEFTOIcHDdr4FG47lLQolZPe+gs7VWtqJKClZfMXI46eSLrd3P2Q2zTdzj328gia3dz9k9sUeEKuTlyzHSauEb2Z6lNq6HrYCBvC470r6V9fKHM0GiufQrb9XVMDIoHOAyMh7MQ8XnInuFz3LnHjJl7GWrZbnCgZG/wCKP7vkx3Z/7SxS7Nk+4aOGIeTillZWvimkp3kEYWuFhYXw3dbfvP8AgOKl2bN2Xt4OPk4A/qohymaU6p1xju8pMB2lYPIGiL6Kxh8sjXfgBHcQ61x5pZtB/wB47l6hH9D5bVFvxMcPIgorXwsHkb1NM5hzGW524/oomylvaaSCN4VnIvqg5tmRuvkRfgVmz0ybzF4GY38YkVrZ9XI4Ou858vop02j2GxosCQoZ9juFsLwfEWVZaacnlsuroLpAcFQ5hu027tx8Qp6zbDsPwi+eedtDuUMtJK3Vh8RmPRCTtuLKqhfXwuiX6U+WYo6t72kEm19NB5KRD0kJbccdLIwUkp0Y7yKj7vZOWX/Uv6kIrgzFVPbo4+Go8il235nyMBJ0yyy1/dHGkl/A/wDxKHkbcWIyRlp7Y9S4KepW+WhRUS42Rnf2gR3iwWYdmudm7s+p8k0iiDQcIAAuf5zsFlgy+viiQ0yXZzvfgXnZP5/T90fS7GBjc5xJDeV1um7+xSkneET0YewN3T9ygU7s3eJHqjIna/zcgKQ3F+JJ9VO5/Zd5DmE41zgVTG2x2/d4uJJ9VPWbufstqOLCxreAQm1q5kZaHHPM2Avw1QZNZyHhCUuIrLKlN9n4hdHJJ242vYZW6XjDgXj/ABuu2RxsjaGtDWMaLAABrWgaAAZAJPtBoMbr8CgTUvdFDdxN4oye8luviqyyxLTycm0xX01aHSCZh0sCfofO/ml+xa/tFpyuLeWn1I8k6qGBzSCLgg3VLxEWI1FrFUzsn+Z6GmtanTOD7j0x7tEfeeIHoT+oWuy6jq5438HWPg7L3Wa85MO+/sUFJoeacXKMQ6ux1xdZQOxHkwRk5ktH0RyTZJ5Ye24WV5ccYY64/mq85oOoB8QsDXktlxxhrANAByWV5eXHHlWNqyB0riN2XjbI+qs5VRpxd7Qc7uF++5zVol4mZ24Wtbvf23dzR8A5m55BRBTV5vLJ/VbkMgFEFYsiSCPE4DiUX0wmwU5aOB+lh9V7Yo+85ILp2ey0biW/X9l0eZJFZMqlO2wARFHFjkDdwOI8gLeqjjWks7mYsJtcgEjW1uO5FnPanItp6XdYoLyOdo7TbGLDN/DcO936JI7Z0snbcbXubuvc99uCJ2BC17yXC9hcX431705rN3P2SsVv5ZqXWLR/8Va+Ly3/AAf/2Q=="
  , github: "https://github.com/Krutikamali01",
  linkedin: "https://www.linkedin.com/in/krutika-mali-9710b3233/"
}

]



createRoot(document.getElementById('root')).render(

  <>
    <Data Students={students}></Data>
    {/* <App name="Krutika" Age="22" Course="BSC CS" url="https://th.bing.com/th/id/OIP.RR8HM_MwUsXs2mczEJaZUwHaHa?w=163&h=180&c=7&r=0&o=5&pid=1.7" /> */}
  </>
)
