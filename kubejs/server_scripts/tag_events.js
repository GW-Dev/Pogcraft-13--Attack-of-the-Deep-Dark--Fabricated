// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.tags('item', event => {
	// Misc tag stuff

	event.add('minecraft:coals', 'modern_industrialization:lignite_coal')
	event.add('c:workbench', 'minecraft:crafting_table')
	event.add('c:cooked_eggs', 'additionaladditions:fried_egg')

	//Farmer's Delight axe tag work
	event.add('fabric:tools/axes', 'additionaladditions:rose_gold_axe')
	event.add('fabric:tools/axes', 'additionaladditions:gilded_netherite_axe')
	event.add('fabric:tools/axes', 'modern_industrialization:diesel_chainsaw')
	event.add('fabric:tools/axes', 'spectrum:multitool')
	event.add('fabric:tools/axes', 'spectrum:bedrock_axe')
	event.add('fabric:tools/axes', 'ae2:certus_quartz_axe')
	event.add('fabric:tools/axes', 'ae2:nether_quartz_axe')
	
	// Ad Astra! pruning
	event.add('c:raw_silver_ores', 'bewitchment:raw_silver')
	event.remove('c:steel_ingots', 'ad_astra:steel_ingot')
	event.remove('c:steel_nuggets', 'ad_astra:steel_nugget')
	event.remove('c:steel_blocks', 'ad_astra:steel_block')
	event.remove('c:steel_plates', 'ad_astra:steel_plate')
	event.remove('c:iron_plates', 'ad_astra:iron_plate')
	event.remove('c:iron_rods', 'ad_astra:iron_rod')
	event.add('c:iron_rods', 'modern_industrialization:iron_rod')


	// MI and Alchemistry de-unification

	event.remove('c:platinum_dusts', 'chemlib:platinum_dust')
	event.remove('c:platinum_nuggets', 'chemlib:platinum_nugget')
	event.remove('c:platinum_ingots', 'chemlib:platinum_ingot')
	event.remove('c:platinum_plates', 'chemlib:platinum_plate')

	event.remove('c:tungsten_dusts', 'chemlib:tungsten_dust')
	event.remove('c:tungsten_nuggets', 'chemlib:tungsten_nugget')
	event.remove('c:tungsten_ingots', 'chemlib:tungsten_ingot')
	event.remove('c:tungsten_plates', 'chemlib:tungsten_plate')

	event.remove('c:aluminum_dusts', 'chemlib:aluminum_dust')
	event.remove('c:aluminum_nuggets', 'chemlib:aluminum_nugget')
	event.remove('c:aluminum_ingots', 'chemlib:aluminum_ingot')
	event.remove('c:aluminum_plates', 'chemlib:aluminum_plate')

	event.remove('c:chromium_dusts', 'chemlib:chromium_dust')
	event.remove('c:chromium_nuggets', 'chemlib:chromium_nugget')
	event.remove('c:chromium_ingots', 'chemlib:chromium_ingot')
	event.remove('c:chromium_plates', 'chemlib:chromium_plate')

	event.remove('c:manganese_dusts', 'chemlib:manganese_dust')
	event.remove('c:manganese_nuggets', 'chemlib:manganese_nugget')
	event.remove('c:manganese_ingots', 'chemlib:manganese_ingot')
	event.remove('c:manganese_plates', 'chemlib:manganese_plate')

	event.remove('c:titanium_dusts', 'chemlib:titanium_dust')
	event.remove('c:titanium_nuggets', 'chemlib:titanium_nugget')
	event.remove('c:titanium_ingots', 'chemlib:titanium_ingot')
	event.remove('c:titanium_plates', 'chemlib:titanium_plate')
	
})