import { Box, Button, Grid } from "@chakra-ui/react";
import { useState } from "react";

import AllProductsCart from "./AllProductsCart";
//  console.log(data)
//import {IoCart} from "react-icons/lo"
const AllProducts = () => {
	const [filters, setfilters] = useState(false);
	console.log(filters);
	let data = [
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/black-orange-two-tone-silicone-apple-watchband-38-40-41mm-images/Black-Orange-Two-Tone-Silicone-Apple-WatchBand-VW.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/black-orange-two-tone-silicone-apple-watchband-38-40-41mm-images/Black-Orange-Two-Tone-Silicone-Apple-WatchBand-1st.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Black-Orange Two Tone Silicone Apple WatchBand (38/40/41mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 799,
			Original_price: 2199,
			Product_details:
				"Rejuvenate the look of your smartwatch with a watchband fashioned with silicone in two contrasting colours. The two-toned design adds character to your watch while the soft-touch silicone reckons with skin sores during intense workout sessions and on a regular day. It immaculately accounts for a gear that perseveres with you while providing the extreme comfort and class.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/black-tough-fit-apple-watch-series-case-44mm-images/Black-Tough-Fit-Apple-Watch-Series-Case-vw.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/black-tough-fit-apple-watch-series-case-44mm-images/Black-Tough-Fit-Apple-Watch-Series-Case-1s.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Black Tough Fit Apple Watch Series Case (44mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 699,
			Original_price: 1499,
			Product_details:
				"Encase your valuable Apple Watch in this Tough Fit Case for well-rounded and long-lasting protection. Moulded from strong and flexible TPU and alloy, the case offers dependable defense against everyday scratches, bumps, dents and breakage.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/blue-white-dual-lock-apple-watchband-with-protective-bumper-case-40mm-images/Blue-White-Dual-Lock-Apple-WatchBand-with-Protective-Bumper-Case-2n.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/blue-white-dual-lock-apple-watchband-with-protective-bumper-case-40mm-images/Blue-White-Dual-Lock-Apple-WatchBand-with-Protective-Bumper-Case-4t.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title:
				"Blue-White Dual Lock Apple WatchBand with Protective Bumper Case (40mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 899,
			Original_price: 2499,
			Product_details:
				"Reliable and resilient, the Dual Lock Apple WatchBand can keep up with the most adventurous times of your day. Its modern and sleek construction gives it an athletic look while the design is engineered to withstand a multitude of bumps & scratches. Compatible with Apple Watch Series 1-6 & SE (40/44mm), the lightweight design of this WatchBand offers comfortable wear.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/gray-lime-two-tone-silicone-apple-watchband-38-40-41mm-images/Gray-Lime-Two-Tone-Silicone-Apple-WatchBand-VW.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/gray-lime-two-tone-silicone-apple-watchband-38-40-41mm-images/Gray-Lime-Two-Tone-Silicone-Apple-WatchBand-1st.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Gray-Lime Two Tone Silicone Apple WatchBand (38/40/41mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 799,
			Original_price: 2199,
			Product_details:
				"Rejuvenate the look of your smartwatch with a watchband fashioned with silicone in two contrasting colours. The two-toned design adds character to your watch while the soft-touch silicone reckons with skin sores during intense workout sessions and on a regular day. It immaculately accounts for a gear that perseveres with you while providing the extreme comfort and class.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/black-athletic-fit-apple-watch-series-case-with-screen-protector-44mm-images/Black-Athletic-Fit-Apple-Watch-Series-Case-with-Screen-Protector-vw.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/black-athletic-fit-apple-watch-series-case-with-screen-protector-44mm-images/Black-Athletic-Fit-Apple-Watch-Series-Case-with-Screen-Protector-1s.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title:
				"Black Athletic Fit Apple Watch Series Case with Screen Protector (44mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 799,
			Original_price: 1499,
			Product_details:
				"Secure round-the-clock protection for your Apple watch with this Athletic Fit Apple Watch Case that comes with in-built screen protection. The case exterior is made from a combination of flexible TPU and tough PC, to resist high-impact damage while the tempered glass screen protector ensures your watch screen is secure at all times.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/black-blue-activefit-apple-watchband-with-protective-bumper-case-45mm-images/Black-Blue-ActiveFit-Apple-WatchBand-with-Protective-Bumper-Case-2n.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/black-blue-activefit-apple-watchband-with-protective-bumper-case-45mm-images/Black-Blue-ActiveFit-Apple-WatchBand-with-Protective-Bumper-Case-vw.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title:
				"Black-Blue ActiveFit Apple WatchBand with Protective Bumper Case (45mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 899,
			Original_price: 2499,
			Product_details:
				"Streamlined for everyday scratch defence, the ActiveFit Apple WatchBand comes with an added shock-absorbant layer on top which keeps the screen safe in events of bumps & shocks. Compatible with all Apple Watch Series 7 (41/45 mm) this rugged WatchBand is an exquisite choice for any outdoors as it gives your WatchBand the fundamental protection it deserves",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/green-ribbed-silicone-apple-watchband-38-40-41mm-images/Green-Ribbed-Silicone-Apple-Watchband-VW.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/green-ribbed-silicone-apple-watchband-38-40-41mm-images/Green-Ribbed-Silicone-Apple-Watchband-2nd.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Title: "Green Ribbed Silicone Apple WatchBand (38/40/41mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 799,
			Original_price: 2199,
			Product_details:
				"A timeless watchband, subtle enough to blend in with your Apple Watch while offering exceptional comfort and optimal fit. Crafted with flexible silicone, DailyObjects Ribbed Silicone Apple Watchband fits almost all wrists without affecting any physical movement. The perfect pick to remodel your Apple watch with comfort and leisure!",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/green-black-dual-lock-apple-watchband-with-protective-bumper-case-40mm-images/Green-Black-Dual-Lock-Apple-WatchBand-with-Protective-Bumper-Case-2n.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/green-black-dual-lock-apple-watchband-with-protective-bumper-case-40mm-images/Green-Black-Dual-Lock-Apple-WatchBand-with-Protective-Bumper-Case-4t.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title:
				"Green-Black Dual Lock Apple WatchBand with Protective Bumper Case (40mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 899,
			Original_price: 2499,
			Product_details:
				"Reliable and resilient, the Dual Lock Apple WatchBand can keep up with the most adventurous times of your day. Its modern and sleek construction gives it an athletic look while the design is engineered to withstand a multitude of bumps & scratches. Compatible with Apple Watch Series 1-6 & SE (40/44mm), the lightweight design of this WatchBand offers comfortable wear.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/orange-ridge-loop-apple-watchband-42-44-45mm-images/Orange-Ridge-Loop-Apple-WatchBand.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/orange-ridge-loop-apple-watchband-42-44-45mm-images/Orange-Ridge-Loop-Apple-WatchBand-2.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Orange Ridge Loop Apple WatchBand (42/44/45/49mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 899,
			Original_price: 1999,
			Product_details:
				"Complement your active lifestyle with the stylish, flexible and widely adjustable Ridge Loop Apple WatchBand. Crafted with durable yarns, this dual-layered, single strap makes for a must-wear accessory for every place you go- from adventurous trips to your daily runs. The G-hook closure of the watchband easily slides in the loop and offers a secure fit along with dependable protection. Compatible with Apple Watch Series 1-8 & SE (38/40/41 & 42/44/45/49), it is made of a material that’s flexible ensuring easy installation and removal.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/black-gray-two-tone-silicone-apple-watchband-42-44-45mm-images/Black-Gray-Two-Tone-Silicone-Apple-WatchBand-VW.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/black-gray-two-tone-silicone-apple-watchband-42-44-45mm-images/Black-Gray-Two-Tone-Silicone-Apple-WatchBand-1st.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Black-Gray Two Tone Silicone Apple WatchBand (42/44/45/49mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 799,
			Original_price: 2199,
			Product_details:
				"Rejuvenate the look of your smartwatch with a watchband fashioned with silicone in two contrasting colours. The two-toned design adds character to your watch while the soft-touch silicone reckons with skin sores during intense workout sessions and on a regular day. It immaculately accounts for a gear that perseveres with you while providing the extreme comfort and class.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/black-lime-two-tone-silicone-apple-watchband-42-44-45mm-images/Black-Lime-Two-Tone-Silicone-Apple-WatchBand-VW.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/black-lime-two-tone-silicone-apple-watchband-42-44-45mm-images/Black-Lime-Two-Tone-Silicone-Apple-WatchBand-1st.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Black-Lime Two Tone Silicone Apple WatchBand (42/44/45/49mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 799,
			Original_price: 2199,
			Product_details:
				"Rejuvenate the look of your smartwatch with a watchband fashioned with silicone in two contrasting colours. The two-toned design adds character to your watch while the soft-touch silicone reckons with skin sores during intense workout sessions and on a regular day. It immaculately accounts for a gear that perseveres with you while providing the extreme comfort and class.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/black-gray-dual-lock-apple-watchband-with-protective-bumper-case-40mm-images/Black-Gray-Dual-Lock-Apple-WatchBand-with-Protective-Bumper-Case-2n.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/black-gray-dual-lock-apple-watchband-with-protective-bumper-case-40mm-images/Black-Gray-Dual-Lock-Apple-WatchBand-with-Protective-Bumper-Case-4t.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title:
				"Black-Gray Dual Lock Apple WatchBand with Protective Bumper Case (40mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 899,
			Original_price: 2499,
			Product_details:
				"Reliable and resilient, the Dual Lock Apple WatchBand can keep up with the most adventurous times of your day. Its modern and sleek construction gives it an athletic look while the design is engineered to withstand a multitude of bumps & scratches. Compatible with Apple Watch Series 1-6 & SE (40/44mm), the lightweight design of this WatchBand offers comfortable wear.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/black-resistance-silicone-apple-watchband-38-40-41mm-images/Black-Resistance-Silicone-Apple-WatchBand-Vw.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/black-resistance-silicone-apple-watchband-38-40-41mm-images/Black-Resistance-Silicone-Apple-WatchBand-2nd.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Title: "Black Resistance Silicone Apple WatchBand (38/40/41mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 799,
			Original_price: 2199,
			Product_details:
				"Designed for people with unbending lifestyles, Resistance Silicone Apple Watchband is crafted with high-end silicone, ensuring tremendous resilience. Soft touch material reckons with skin sores while the two way closure provides enhanced security to your tech. Additionally, the precise textured pattern on the top is what adds character, along with providing traction and resistance to abrasion.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/black-dual-lock-apple-watchband-with-protective-bumper-case-40mm-images/Black-Dual-Lock-Apple-WatchBand-with-Protective-Bumper-Case-2n.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/black-dual-lock-apple-watchband-with-protective-bumper-case-40mm-images/Black-Dual-Lock-Apple-WatchBand-with-Protective-Bumper-Case-4t.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title:
				"Black Dual Lock Apple WatchBand with Protective Bumper Case (40mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 899,
			Original_price: 2499,
			Product_details:
				"Reliable and resilient, the Dual Lock Apple WatchBand can keep up with the most adventurous times of your day. Its modern and sleek construction gives it an athletic look while the design is engineered to withstand a multitude of bumps & scratches. Compatible with Apple Watch Series 1-6 & SE (40/44mm), the lightweight design of this WatchBand offers comfortable wear.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/black-clear-2-0-apple-watchband-with-protective-bumper-case-42-44mm-images/Black-Clear-2-0-Apple-WatchBand-with-Protective-Bumper-Case-vw.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/black-clear-2-0-apple-watchband-with-protective-bumper-case-42-44mm-images/Black-Clear-2-0-Apple-WatchBand-with-Protective-Bumper-Case-1s.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Title:
				"Black Clear 2.0 Apple WatchBand with Protective Bumper Case (42/44mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 899,
			Original_price: 2199,
			Product_details:
				"A transformation of your Apple Watch into something that goes beyond expectations to offer great protection and a flawless, utilitarian design. Fashioned from TPU, Clear 2.0 Apple WatchBand is �the’ pick for serious shock-deflection. Compatible with Apple Watch Series 1-6 & SE(42/44 mm), the clear watchband also gives a crystalline look to your watch.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/lavender-ribbed-silicone-apple-watchband-42-44-45mm-images/Lavender-Ribbed-Silicone-Apple-Watchband-VW.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/lavender-ribbed-silicone-apple-watchband-42-44-45mm-images/Lavender-Ribbed-Silicone-Apple-Watchband-2nd.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Title: "Lavender Ribbed Silicone Apple WatchBand (42/44/45/49mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 899,
			Original_price: 2199,
			Product_details:
				"A timeless watchband, subtle enough to blend in with your Apple Watch while offering exceptional comfort and optimal fit. Crafted with flexible silicone, DailyObjects Ribbed Silicone Apple Watchband fits almost all wrists without affecting any physical movement. The perfect pick to remodel your Apple watch with comfort and leisure!",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/black-ribbed-silicone-apple-watchband-42-44-45mm-images/Black-Ribbed-Silicone-Apple-Watchband-VW.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/black-ribbed-silicone-apple-watchband-42-44-45mm-images/Black-Ribbed-Silicone-Apple-Watchband-2nd.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Title: "Black Ribbed Silicone Apple WatchBand (42/44/45/49mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 899,
			Original_price: 2199,
			Product_details:
				"A timeless watchband, subtle enough to blend in with your Apple Watch while offering exceptional comfort and optimal fit. Crafted with flexible silicone, DailyObjects Ribbed Silicone Apple Watchband fits almost all wrists without affecting any physical movement. The perfect pick to remodel your Apple watch with comfort and leisure!",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/silver-tough-fit-apple-watch-series-case-45mm-images/Silver-Tough-Fit-Apple-Watch-Series-Case-vw.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/silver-tough-fit-apple-watch-series-case-45mm-images/Silver-Tough-Fit-Apple-Watch-Series-Case-1s.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Silver Tough Fit Apple Watch Series Case (45mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 699,
			Original_price: 1499,
			Product_details:
				"Encase your valuable Apple Watch in this Tough Fit Case for well-rounded and long-lasting protection. Moulded from strong and flexible TPU and alloy, the case offers dependable defense against everyday scratches, bumps, dents and breakage.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/rosegold-sleek-fit-apple-watch-series-case-with-screen-protector-44mm-images/Rosegold-Sleek-Fit-Apple-Watch-Series-Case-with-Screen-Protector.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/rosegold-sleek-fit-apple-watch-series-case-with-screen-protector-44mm-images/Rosegold-Sleek-Fit-Apple-Watch-Series-Case-with-Screen-Protector-2n.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Title:
				"Rosegold Sleek Fit Apple Watch Series Case with Screen Protector (44mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 799,
			Original_price: 1499,
			Product_details:
				"Designed to add elegant protection to your tech, Sleek Fit Case’s minimal design, ultra-thin frame and precise cut-outs preserve the complete look and feel of the watch. Polycarbonate case exterior along with tempered glass protector for 360 degree integrated protection from scratches, bumps and breakage.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/pink-ribbed-fit-apple-watch-series-case-with-screen-protector-40mm-images/Pink-Ribbed-Fit-Apple-Watch-Series-Case-with-Screen-Protector.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/pink-ribbed-fit-apple-watch-series-case-with-screen-protector-40mm-images/Pink-Ribbed-Fit-Apple-Watch-Series-Case-with-Screen-Protector-1s.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title:
				"Pink Ribbed Fit Apple Watch Series Case with Screen Protector (40mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 799,
			Original_price: 999,
			Product_details:
				"Choose statement making Apple watch protection with ribbed-design polycarbonate case exterior along with tempered glass protector for 360 degree integrated protection from scratches, bumps and breakage.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/clear-ribbed-fit-apple-watch-series-case-with-screen-protector-40mm-images/Clear-Ribbed-Fit-Apple-Watch-Series-Case-with-Screen-Protector.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/clear-ribbed-fit-apple-watch-series-case-with-screen-protector-40mm-images/Clear-Ribbed-Fit-Apple-Watch-Series-Case-with-Screen-Protector-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title:
				"Clear Ribbed Fit Apple Watch Series Case with Screen Protector (40mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 699,
			Original_price: 999,
			Product_details:
				"Choose statement making Apple watch protection with ribbed-design polycarbonate case exterior along with tempered glass protector for 360 degree integrated protection from scratches, bumps and breakage.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/clear-sleek-fit-apple-watch-series-case-with-screen-protector-41mm-images/Clear-Sleek-Fit-Apple-Watch-Series-Case-with-Screen-Protector.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/clear-sleek-fit-apple-watch-series-case-with-screen-protector-41mm-images/Clear-Sleek-Fit-Apple-Watch-Series-Case-with-Screen-Protector-2n.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Title:
				"Clear Sleek Fit Apple Watch Series Case with Screen Protector (41mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 799,
			Original_price: 1499,
			Product_details:
				"Designed to add elegant protection to your tech, Sleek Fit Case’s minimal design, ultra-thin frame and precise cut-outs preserve the complete look and feel of the watch. Polycarbonate case exterior along with tempered glass protector for 360 degree integrated protection from scratches, bumps and breakage.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/black-gray-dual-lock-apple-watchband-with-protective-bumper-case-40mm-images/Black-Gray-Dual-Lock-Apple-WatchBand-with-Protective-Bumper-Case-2n.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/black-gray-dual-lock-apple-watchband-with-protective-bumper-case-40mm-images/Black-Gray-Dual-Lock-Apple-WatchBand-with-Protective-Bumper-Case-4t.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title:
				"Black-Gray Dual Lock Apple WatchBand with Protective Bumper Case (40mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 899,
			Original_price: 2499,
			Product_details:
				"Reliable and resilient, the Dual Lock Apple WatchBand can keep up with the most adventurous times of your day. Its modern and sleek construction gives it an athletic look while the design is engineered to withstand a multitude of bumps & scratches. Compatible with Apple Watch Series 1-6 & SE (40/44mm), the lightweight design of this WatchBand offers comfortable wear.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/grey-pull-tab-nylon-weave-apple-watchband-42-44-45-49mm-images/Grey-Pull-Tab-Nylon-Weave-Apple-WatchBand-3.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/grey-pull-tab-nylon-weave-apple-watchband-42-44-45-49mm-images/Grey-Pull-Tab-Nylon-Weave-Apple-WatchBand.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Grey Pull Tab Nylon Weave Apple WatchBand (42/44/45/49mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 899,
			Original_price: 1999,
			Product_details:
				"Woven in breathable material, the Pull Tab Nylon Weave Apple WatchBand is made to offer soft-cushioning and fundamental protection to your watch. Its pull tab closure mechanism makes it infinitely adjustable. Compatible with Apple Watch 8 Ultra (49mm), the lightweight design of this WatchBand offers an extremely comfortable wear.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/clear-sleek-fit-apple-watch-series-case-with-screen-protector-41mm-images/Clear-Sleek-Fit-Apple-Watch-Series-Case-with-Screen-Protector.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/clear-sleek-fit-apple-watch-series-case-with-screen-protector-41mm-images/Clear-Sleek-Fit-Apple-Watch-Series-Case-with-Screen-Protector-2n.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Title:
				"Clear Sleek Fit Apple Watch Series Case with Screen Protector (41mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 799,
			Original_price: 1499,
			Product_details:
				"Designed to add elegant protection to your tech, Sleek Fit Case’s minimal design, ultra-thin frame and precise cut-outs preserve the complete look and feel of the watch. Polycarbonate case exterior along with tempered glass protector for 360 degree integrated protection from scratches, bumps and breakage.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/black-clear-2-0-apple-watchband-with-protective-bumper-case-38-40mm-images/Black-Clear-2-0-Apple-WatchBand-with-Protective-Bumper-Case-vw.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/black-clear-2-0-apple-watchband-with-protective-bumper-case-38-40mm-images/Black-Clear-2-0-Apple-WatchBand-with-Protective-Bumper-Case-1s.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Title:
				"Black Clear 2.0 Apple WatchBand with Protective Bumper Case (38/40mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 899,
			Original_price: 2199,
			Product_details:
				"A transformation of your Apple Watch into something that goes beyond expectations to offer great protection and a flawless, utilitarian design. Fashioned from TPU, Clear 2.0 Apple WatchBand is the’ pick for serious shock-deflection. Compatible with Apple Watch Series 1-6 & SE(38/40 mm), the clear watchband also gives a crystalline look to your watch.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/black-ridge-loop-apple-watchband-38-40-41mm-images/Black-Ridge-Loop-Apple-WatchBand-2.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/black-ridge-loop-apple-watchband-38-40-41mm-images/Black-Ridge-Loop-Apple-WatchBand-3-view.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Black Ridge Loop Apple WatchBand (38/40/41mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 899,
			Original_price: 1999,
			Product_details:
				"Complement your active lifestyle with the stylish, flexible and widely adjustable Ridge Loop Apple WatchBand. Crafted with durable yarns, this dual-layered, single strap makes for a must-wear accessory for every place you go- from adventurous trips to your daily runs. The G-hook closure of the watchband easily slides in the loop and offers a secure fit along with dependable protection. Compatible with Apple Watch Series 1-8 & SE (38/40/41 & 42/44/45), it is made of a material that�s flexible ensuring easy installation and removal.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/rosegold-sleek-fit-apple-watch-series-case-with-screen-protector-41mm-images/Rosegold-Sleek-Fit-Apple-Watch-Series-Case-with-Screen-Protector.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/rosegold-sleek-fit-apple-watch-series-case-with-screen-protector-41mm-images/Rosegold-Sleek-Fit-Apple-Watch-Series-Case-with-Screen-Protector-3r.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Title:
				"Rosegold Sleek Fit Apple Watch Series Case with Screen Protector (41mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 799,
			Original_price: 1499,
			Product_details:
				"Designed to add elegant protection to your tech, Sleek Fit Case’s minimal design, ultra-thin frame and precise cut-outs preserve the complete look and feel of the watch. Polycarbonate case exterior along with tempered glass protector for 360 degree integrated protection from scratches, bumps and breakage.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/black-orange-dual-lock-apple-watchband-with-protective-bumper-case-40mm-images/Black-Orange-Dual-Lock-Apple-WatchBand-with-Protective-Bumper-Case-2n.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/black-orange-dual-lock-apple-watchband-with-protective-bumper-case-40mm-images/Black-Dual-Lock-Apple-WatchBand-with-Protective-Bumper-Case-1st.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Title:
				"Black-Orange Dual Lock Apple WatchBand with Protective Bumper Case (40mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 899,
			Original_price: 2499,
			Product_details:
				"Reliable and resilient, the Dual Lock Apple WatchBand can keep up with the most adventurous times of your day. Its modern and sleek construction gives it an athletic look while the design is engineered to withstand a multitude of bumps & scratches. Compatible with Apple Watch Series 1-6 & SE (40/44mm), the lightweight design of this WatchBand offers comfortable wear.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1801/blue-sleek-fit-apple-watch-series-case-with-screen-protector-41mm-images/Blue-Sleek-Fit-Apple-Watch-Series-Case-with-Screen-Protector.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1801/blue-sleek-fit-apple-watch-series-case-with-screen-protector-41mm-images/Blue-Sleek-Fit-Apple-Watch-Series-Case-with-Screen-Protector-1s.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title:
				"Blue Sleek Fit Apple Watch Series Case with Screen Protector (41mm)",
			Category: "Watchbands",
			Brand: "Watch",
			Discount_price: 699,
			Original_price: 1499,
			Product_details:
				"Designed to add elegant protection to your tech, Sleek Fit Case’s minimal design, ultra-thin frame and precise cut-outs preserve the complete look and feel of the watch. Polycarbonate case exterior along with tempered glass protector for 360 degree integrated protection from scratches, bumps and breakage.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/cirque-phone-and-pen-stand-blue-images/Cirque-Phone-and-Pen-Stand-Blue-v.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/cirque-phone-and-pen-stand-blue-images/Cirque-Phone-and-Pen-Stand-Blue-1s.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Cirque Phone and Pen Stand - (Blue)",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 2799,
			Original_price: 2999,
			Product_details:
				"Accessorise your desk with the elegant CIRQUE Phone and Pen Stand. Made from natural ashwood, the phone stand can securely hold your phone while the pen stand is adequately spacious to hold a stack of pens, pencils and other small desk accessories. An impeccable match for any busy work desk.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/mount-adjustable-phone-stand-green-images/Mount-Adjustable-Phone-Stand-Green-v.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/mount-adjustable-phone-stand-green-images/Mount-Adjustable-Phone-Stand-Green-1st.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Mount Adjustable Phone Stand - (Green)",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 2199,
			Original_price: 2499,
			Product_details:
				"Tactfully designed for superior experience, Mount Adjustable Phone Stand, stands out in terms of utility and craftsmanship. Fashioned from natural ashwood and highly durable Aluminium metal, the stand comes with a circular wooden bolt at the back and a rotating panel at the bottom for adjustable height and angle capabilities to accommodate different viewing needs of users. Simply adjust the bolt and choose your preferred viewing angle while watching videos, browsing, or face-timing.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/arete-laptop-stand-ivory-images/Arete-Laptop-Stand-Ivory-v.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/arete-laptop-stand-ivory-images/Arete-Laptop-Stand-Ivory-2N.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Arete Laptop Stand - (Ivory)",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 2499,
			Original_price: 2999,
			Product_details:
				"Add superior stability, improved posture, comfort and lots of character to your desk with this precisely designed Arete Laptop Stand. The elevation of the aluminium panel ensures that your device is positioned at an angle to match your eye-level and support your working posture while its sleek and open design ensures effortless user experience. The durable matte-finish aluminium and smooth leatherite cladding gives the stand a clean modern expression to complement contemporary device designs.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/arete-laptop-stand-ivory-images/Arete-Laptop-Stand-Ivory-v.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/arete-laptop-stand-ivory-images/Arete-Laptop-Stand-Ivory-2N.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Arete Laptop Stand - (Ivory)",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 2499,
			Original_price: 2999,
			Product_details:
				"Add superior stability, improved posture, comfort and lots of character to your desk with this precisely designed Arete Laptop Stand. The elevation of the aluminium panel ensures that your device is positioned at an angle to match your eye-level and support your working posture while its sleek and open design ensures effortless user experience. The durable matte-finish aluminium and smooth leatherite cladding gives the stand a clean modern expression to complement contemporary device designs.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/arete-laptop-stand-blue-images/Arete-Laptop-Stand-Blue-v.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/arete-laptop-stand-blue-images/Arete-Laptop-Stand-Blue-9t.jpg?tr=cm-pad_crop,v-2,w-800,h-707,dpr-1",
			Title: "Arete Laptop Stand - (Blue)",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 2499,
			Original_price: 2999,
			Product_details:
				"Add superior stability, improved posture, comfort and lots of character to your desk with this precisely designed Arete Laptop Stand. The elevation of the aluminium panel ensures that your device is positioned at an angle to match your eye-level and support your working posture while its sleek and open design ensures effortless user experience. The durable matte-finish aluminium and smooth leatherite cladding gives the stand a clean modern expression to complement contemporary device designs.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/mount-adjustable-phone-stand-blue-images/Mount-Adjustable-Phone-Stand-Blue-v.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/mount-adjustable-phone-stand-blue-images/Mount-Adjustable-Phone-Stand-Blue-1st.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Mount Adjustable Phone Stand - (Blue)",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 2199,
			Original_price: 2499,
			Product_details:
				"Tactfully designed for superior experience, Mount Adjustable Phone Stand, stands out in terms of utility and craftsmanship. Fashioned from natural ashwood and highly durable Aluminium metal, the stand comes with a circular wooden bolt at the back and a rotating panel at the bottom for adjustable height and angle capabilities to accommodate different viewing needs of users. Simply adjust the bolt and choose your preferred viewing angle while watching videos, browsing, or face-timing.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/mesa-monitor-stand-green-images/Mesa-Monitor-Stand-Green.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/mesa-monitor-stand-green-images/Mesa-Monitor-Stand-Green-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Mesa Monitor Stand - (Green)",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 4999,
			Original_price: 5999,
			Product_details:
				"Elevate your monitor as well as your workstation experience with Mesa Monitor Stand! Your ultimate ally for productive working, it is a perfect coalition of design and function. It’s thoughtful design frees up valuable space on your desk and elevated height supports improved working posture, making it ergonomically friendly. Durable, matte-finish aluminium gives the stand design a clean modern expression to complement contemporary device designs. Natural ashwood tray softens the look and adds a warm feel while the colours bring the fun element.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/cirque-phone-and-pen-stand-ivory-images/Cirque-Phone-and-Pen-Stand-Ivory-v.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/cirque-phone-and-pen-stand-ivory-images/Cirque-Phone-and-Pen-Stand-Ivory-1s.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Cirque Phone and Pen Stand - (Ivory)",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 2799,
			Original_price: 2999,
			Product_details:
				"Accessorise your desk with the elegant CIRQUE Phone and Pen Stand. Made from natural ashwood, the phone stand can securely hold your phone while the pen stand is adequately spacious to hold a stack of pens, pencils and other small desk accessories. An impeccable match for any busy work desk.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/striate-wooden-tray-images/Striate-Wooden-Tray.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/striate-wooden-tray-images/Striate-Wooden-Tray-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Striate Wooden Tray",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 1499,
			Original_price: 1999,
			Product_details:
				"Align your work desk essentials with a skillfully crafted Striate Wooden Tray. Along with separate space for your knick-knacks, this tray also has ingeniously altered surface in the form of waves or indents to hold your stationery. The product is envisioned to be a convenient solution to declutter your desk and organise other small desk essentials such as - pens, phone, air-pods, notepad, pen-drive and more.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/coal-grey-shift-mouse-pad-images/Black-Grey-Shift-Mouse-Pad.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/coal-grey-shift-mouse-pad-images/Black-Grey-Shift-Mouse-Pad-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Coal-Grey SHIFT Mouse Pad",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 499,
			Original_price: 1499,
			Product_details:
				"Make a shift in your workspace and create an ambient surface on your desk with this handcrafted, soft-grain leatherite SHIFT Mouse Pad. Designed in striking dual-colour combinations by in-house artisans, this classic soft-touch leatherite mouse pad enables swift movement of your mouse while you are working or just browsing.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/coal-grey-shift-desk-mat-images/Coal-Grey-SHIFT-Desk-Mat.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/coal-grey-shift-desk-mat-images/Coal-Grey-SHIFT-Desk-Mat-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Coal-Grey SHIFT Desk Mat",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 999,
			Original_price: 1999,
			Product_details:
				"Make a shift in your desk accessories and create an ambient surface on your workstation with this handcrafted, soft-grain leatherite SHIFT Desk Mat. Designed in striking dual-colour combinations, it can be put to use as an accessory around your home for friction-free movement and smooth operation. This classic soft-touch leather desk mat is perfect to hold your laptop or keyboard smoothly and it also enables swift movement of your mouse.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/brown-navy-shift-mouse-pad-images/Brown-Navy-Shift-Mouse-Pad.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/brown-navy-shift-mouse-pad-images/Brown-Navy-Shift-Mouse-Pad-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Brown-Navy SHIFT Mouse Pad",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 399,
			Original_price: 1499,
			Product_details:
				"Make a shift in your workspace and create an ambient surface on your desk with this handcrafted, soft-grain leatherite SHIFT Mouse Pad. Designed in striking dual-colour combinations by in-house artisans, this classic soft-touch leatherite mouse pad enables swift movement of your mouse while you are working or just browsing.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/terracotta-crimson-red-shift-desk-mat-images/Terracotta-Crimson-Red-SHIFT-Desk-Mat.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/terracotta-crimson-red-shift-desk-mat-images/Terracotta-Crimson-Red-SHIFT-Desk-Mat-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Terracotta-Crimson Red SHIFT Desk Mat",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 999,
			Original_price: 1999,
			Product_details:
				"Make a shift in your desk accessories and create an ambient surface on your workstation with this handcrafted, soft-grain leatherite SHIFT Desk Mat. Designed in striking dual-colour combinations, it can be put to use as an accessory around your home for friction-free movement and smooth operation. This classic soft-touch leather desk mat is perfect to hold your laptop or keyboard smoothly and it also enables swift movement of your mouse.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/terracotta-crimson-red-shift-mouse-pad-images/Orange-Terracotta-Shift-Mouse-Pad.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/terracotta-crimson-red-shift-mouse-pad-images/Orange-Terracotta-Shift-Mouse-Pad-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Terracotta-Crimson Red SHIFT Mouse Pad",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 399,
			Original_price: 1499,
			Product_details:
				"Make a shift in your workspace and create an ambient surface on your desk with this handcrafted, soft-grain leatherite SHIFT Mouse Pad. Designed in striking dual-colour combinations by in-house artisans, this classic soft-touch leatherite mouse pad enables swift movement of your mouse while you are working or just browsing.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/coal-grey-shift-mouse-pad-images/Black-Grey-Shift-Mouse-Pad.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/coal-grey-shift-mouse-pad-images/Black-Grey-Shift-Mouse-Pad-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Coal-Grey SHIFT Mouse Pad",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 499,
			Original_price: 1499,
			Product_details:
				"Make a shift in your workspace and create an ambient surface on your desk with this handcrafted, soft-grain leatherite SHIFT Mouse Pad. Designed in striking dual-colour combinations by in-house artisans, this classic soft-touch leatherite mouse pad enables swift movement of your mouse while you are working or just browsing.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/terracotta-crimson-red-shift-mouse-pad-images/Orange-Terracotta-Shift-Mouse-Pad.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/terracotta-crimson-red-shift-mouse-pad-images/Orange-Terracotta-Shift-Mouse-Pad-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Terracotta-Crimson Red SHIFT Mouse Pad",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 399,
			Original_price: 1499,
			Product_details:
				"Make a shift in your workspace and create an ambient surface on your desk with this handcrafted, soft-grain leatherite SHIFT Mouse Pad. Designed in striking dual-colour combinations by in-house artisans, this classic soft-touch leatherite mouse pad enables swift movement of your mouse while you are working or just browsing.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/brown-navy-shift-mouse-pad-images/Brown-Navy-Shift-Mouse-Pad.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/brown-navy-shift-mouse-pad-images/Brown-Navy-Shift-Mouse-Pad-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Brown-Navy SHIFT Mouse Pad",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 399,
			Original_price: 1499,
			Product_details:
				"Make a shift in your workspace and create an ambient surface on your desk with this handcrafted, soft-grain leatherite SHIFT Mouse Pad. Designed in striking dual-colour combinations by in-house artisans, this classic soft-touch leatherite mouse pad enables swift movement of your mouse while you are working or just browsing.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/mesa-monitor-stand-red-images/Mesa-Monitor-Stand-Red.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/mesa-monitor-stand-red-images/Mesa-Monitor-Stand-Red-2.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Mesa Monitor Stand - (Red)",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 4999,
			Original_price: 5999,
			Product_details:
				"Elevate your monitor as well as your workstation experience with Mesa Monitor Stand! Your ultimate ally for productive working, it is a perfect coalition of design and function. It’s thoughtful design frees up valuable space on your desk and elevated height supports improved working posture, making it ergonomically friendly. Durable, matte-finish aluminium gives the stand design a clean modern expression to complement contemporary device designs. Natural ashwood tray softens the look and adds a warm feel while the colours bring the fun element.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/mesa-monitor-stand-blue-images/Mesa-Monitor-Stand-Blue.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/mesa-monitor-stand-blue-images/Mesa-Monitor-Stand-Blue-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Mesa Monitor Stand - (Blue)",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 4999,
			Original_price: 5999,
			Product_details:
				"Elevate your monitor as well as your workstation experience with Mesa Monitor Stand! Your ultimate ally for productive working, it is a perfect coalition of design and function. It’s thoughtful design frees up valuable space on your desk and elevated height supports improved working posture, making it ergonomically friendly. Durable, matte-finish aluminium gives the stand design a clean modern expression to complement contemporary device designs. Natural ashwood tray softens the look and adds a warm feel while the colours bring the fun element.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1702/brown-navy-shift-desk-mat-images/Brown-Navy-SHIFT-Desk-Mat.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1702/brown-navy-shift-desk-mat-images/Brown-Navy-SHIFT-Desk-Mat-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Brown-Navy SHIFT Desk Mat",
			Category: "Desks",
			Brand: "Desks",
			Discount_price: 999,
			Original_price: 1999,
			Product_details:
				"Make a shift in your desk accessories and create an ambient surface on your workstation with this handcrafted, soft-grain leatherite SHIFT Desk Mat. Designed in striking dual-colour combinations, it can be put to use as an accessory around your home for friction-free movement and smooth operation. This classic soft-touch leather desk mat is perfect to hold your laptop or keyboard smoothly and it also enables swift movement of your mouse.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1401/dailyobjects-space-blue-foldaway-slim-eyewear-sunglass-case-images/DailyObjects-Space-Blue-Foldaway-Slim-Eyewear-Sunglass-Case.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1401/dailyobjects-space-blue-foldaway-slim-eyewear-sunglass-case-images/DailyObjects-Space-Blue-Foldaway-Slim-Eyewear-Sunglass-Case-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Space Blue - Foldaway Slim Eyewear/Sunglass Case",
			Category: "Eyewear",
			Brand: "Eyewear",
			Discount_price: 799,
			Original_price: 1499,
			Product_details:
				"Carry your exquisite frames in style with a designer foldaway hard shell case. The leatherite case holds the eyewear perfectly. While you are not using the eyewear, fold the case flat and keep it in your pocket or bag and you are good to go. Concealed magnetic fastening and soft suede lining keeps your glasses secure and scratch-free.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1401/dailyobjects-terracotta-red-foldaway-slim-eyewear-sunglass-case-images/DailyObjects-Terracotta-Red-Foldaway-Slim-Eyewear-Sunglass-Case.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1401/dailyobjects-terracotta-red-foldaway-slim-eyewear-sunglass-case-images/DailyObjects-Terracotta-Red-Foldaway-Slim-Eyewear-Sunglass-Case-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Terracotta Red - Foldaway Slim Eyewear/Sunglass Case",
			Category: "Eyewear",
			Brand: "Eyewear",
			Discount_price: 799,
			Original_price: 1499,
			Product_details:
				"Carry your exquisite frames in style with a designer foldaway hard shell case. The leatherite case holds the eyewear perfectly. While you are not using the eyewear, fold the case flat and keep it in your pocket or bag and you are good to go. Concealed magnetic fastening and soft suede lining keeps your glasses secure and scratch-free.",
		},
		{
			Image1:
				"https://images.dailyobjects.com/marche/product-images/1401/dailyobjects-walnut-brown-foldaway-slim-eyewear-sunglass-case-images/DailyObjects-Walnut-Brown-Foldaway-Slim-Eyewear-Sunglass-Case.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Image2:
				"https://images.dailyobjects.com/marche/product-images/1401/dailyobjects-walnut-brown-foldaway-slim-eyewear-sunglass-case-images/DailyObjects-Walnut-Brown-Foldaway-Slim-Eyewear-Sunglass-Case-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1",
			Title: "Walnut Brown - Foldaway Slim Eyewear/Sunglass Case",
			Category: "Eyewear",
			Brand: "Eyewear",
			Discount_price: 799,
			Original_price: 1499,
			Product_details:
				"Carry your exquisite frames in style with a designer foldaway hard shell case. The leatherite case holds the eyewear perfectly. While you are not using the eyewear, fold the case flat and keep it in your pocket or bag and you are good to go. Concealed magnetic fastening and soft suede lining keeps your glasses secure and scratch-free.",
		},
	];
	return (
		<Box>
			<Button
				colorScheme="teal"
				variant="link"
				onClick={(e) => setfilters(!filters)}
			>
				Filters
			</Button>
			<Box display={"flex"}>
				<Box>
					<Grid templateColumns="repeat(4, 1fr)" gap={7} w="95%" m="auto">
						{data.map((ele) => (
							<AllProductsCart {...ele} />
						))}{" "}
					</Grid>
				</Box>
				{filters && (
					<Box w={"27%"}>
						<Box pl="20px">
							<Button
								borderRadius={"25px"}
								colorScheme="teal"
								backgroundColor="#20a87e"
								variant="solid"
								display={"block"}
								mt="15px"
								mr="auto"
							>
								Sort
							</Button>
							<Button
								colorScheme="white"
								variant="link"
								display={"block"}
								mt="20px"
								mr="auto"
							>
								Price: Low To High
							</Button>
							<Button
								colorScheme="white"
								variant="link"
								display={"block"}
								mt="20px"
								mr="auto"
							>
								Price: High To Low
							</Button>
						</Box>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default AllProducts;