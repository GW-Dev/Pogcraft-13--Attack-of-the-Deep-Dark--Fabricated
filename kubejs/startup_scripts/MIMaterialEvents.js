MIMaterialEvents.addMaterials(event => {
    event.createMaterial("Desh", "desh", 0xd68d4d, // english name, internal name, and material color in hex
        builder => {
        builder.addParts("ingot", "nugget", "dust", "tiny_dust", "rod", "gear", "ring", "blade", "rotor", "coil", "plate", "bolt", "large_plate", "wire", "fine_wire", "hot_ingot")
            // addParts adds the simple parts to the material ie, the one already defined in MI and that don't need more parameters 
            .block("copper") // add a simple block with the "copper" texture (found in "textures/materialsets/blocks")\
            .cable("lv")
            // and 8.0 blast resistance (also optional, default is 6.0)
            .machineCasing(8.0) // same as above but for machine casings but the custom name and path are optional
            
            // as for ore, a second boolean optional parameter can be passed to only add the raw ore block if true or the raw ore item if false
            // default is to add both, equivalent to .rawMetal("copper", true).rawMetal("copper", false)
            .defaultRecipes(); // add the default recipes for the material (crafting, smelting and machines)
    });

    event.createMaterial("Ostrum", "ostrum", 0x925e64, // english name, internal name, and material color in hex
        builder => {
        builder.addParts("ingot", "nugget", "dust", "tiny_dust", "rod", "gear", "ring", "blade", "rotor", "coil", "plate", "bolt", "large_plate", "wire", "fine_wire", "hot_ingot")
            // addParts adds the simple parts to the material ie, the one already defined in MI and that don't need more parameters 
            .block("copper") // add a simple block with the "copper" texture (found in "textures/materialsets/blocks") 
            .cable("mv")
            // and 8.0 blast resistance (also optional, default is 6.0)
            .machineCasing(8.0) // same as above but for machine casings but the custom name and path are optional
            
            // as for ore, a second boolean optional parameter can be passed to only add the raw ore block if true or the raw ore item if false
            // default is to add both, equivalent to .rawMetal("copper", true).rawMetal("copper", false)
            .defaultRecipes(); // add the default recipes for the material (crafting, smelting and machines)
    });

    event.createMaterial("Calorite", "calorite", 0xb83145, // english name, internal name, and material color in hex
        builder => {
        builder.addParts("ingot", "nugget", "dust", "tiny_dust", "rod", "gear", "ring", "blade", "rotor", "coil", "plate", "bolt", "large_plate", "wire", "fine_wire", "hot_ingot")
            // addParts adds the simple parts to the material ie, the one already defined in MI and that don't need more parameters 
            .block("copper") // add a simple block with the "copper" texture (found in "textures/materialsets/blocks") 
            .cable("hv")
            // and 8.0 blast resistance (also optional, default is 6.0)
            .machineCasing(8.0) // same as above but for machine casings but the custom name and path are optional
            
            // as for ore, a second boolean optional parameter can be passed to only add the raw ore block if true or the raw ore item if false
            // default is to add both, equivalent to .rawMetal("copper", true).rawMetal("copper", false)
            .defaultRecipes(); // add the default recipes for the material (crafting, smelting and machines)
    });
});