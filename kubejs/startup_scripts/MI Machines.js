let PYROLYZE_OVEN
let GREENHOUSE

MIMachineEvents.registerRecipeTypes(event => {
    PYROLYZE_OVEN = event.register("pyrolyze_oven")
        .withItemInputs() // enable item inputs
        .withItemOutputs() // enable item outputs
        .withFluidInputs() // enable fluid inputs
        .withFluidOutputs(); // enable fluid outputs
        GREENHOUSE = event.register("greenhouse")
        .withItemInputs() // enable item inputs
        .withItemOutputs() // enable item outputs
        .withFluidInputs() // enable fluid inputs
        .withFluidOutputs(); // enable fluid outputs
});

MIMachineEvents.registerMachines(event => {
	//Pyrolyze Oven
    const pyrolyzeHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
    const heatproofMember = event.memberOfBlock("modern_industrialization:heatproof_machine_casing");
    const cupronickelCoilMember = event.memberOfBlock("modern_industrialization:cupronickel_coil");
    const pyrolyzeShapeBuilder = event.startShape("heatproof_machine_casing");
    for (let x = -1; x <= 1; x++) {
        for (let y= -1; y <= 1; y++) {
            for (let z = 0; z <= 3; z++) {
                if (z === 1 || z === 2) {
                    if (x !== 0 || y !== 0) {
                        pyrolyzeShapeBuilder.add(x, y, z, cupronickelCoilMember, event.noHatch());
                    }
                } else {
                    pyrolyzeShapeBuilder.add(x, y, z, heatproofMember, pyrolyzeHatch);
                }
            }
        }
    }
    const pyrolyzeShape = pyrolyzeShapeBuilder.build();

    //Greenhouse
    const greenhouseHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
    const bronzeBrickMember = event.memberOfBlock("modern_industrialization:bronze_plated_bricks");
    const glassMember = event.memberOfBlock("minecraft:lime_stained_glass");
    const greenhouseShapeBuilder = event.startShape("bronze_plated_bricks");
    for (let x = -1; x <= 1; x++) {
        for (let y= -1; y <= 1; y++) {
            for (let z = 0; z <= 2; z++) {
                if (z === 1) {
                    if ((x === 1 || x === -1) && (y === 1 || y === -1)) {
                        greenhouseShapeBuilder.add(x, y, z, bronzeBrickMember, greenhouseHatch);
                    }
                    else if (x !== 0 || y !== 0) {
                        greenhouseShapeBuilder.add(x, y, z, glassMember, event.noHatch());
                    }
                } else {
                    greenhouseShapeBuilder.add(x, y, z, bronzeBrickMember, greenhouseHatch);
                }
            }
        }
    }
    const greenhouseShape = greenhouseShapeBuilder.build();

    event.simpleElectricCraftingMultiBlock(
        // English name, internal name, recipe type, multiblock shape
        "Pyrolyze Oven", "pyrolyze_oven", PYROLYZE_OVEN, pyrolyzeShape,
        /* REI DISPLAY CONFIGURATION */
        // REI progress bar
        event.progressBar(77, 33, "arrow"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlots(56, 35, 2, 1), itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(36, 35), fluidOutputs => fluidOutputs.addSlot(122, 35),
        /* MODEL CONFIGUATION */
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "heatproof_machine_casing", "electric_blast_furnace", true, false, false,
    );
    event.simpleElectricCraftingMultiBlock(
        // English name, internal name, recipe type, multiblock shape
        "Greenhouse", "greenhouse", GREENHOUSE, greenhouseShape,
        /* REI DISPLAY CONFIGURATION */
        // REI progress bar
        event.progressBar(77, 33, "arrow"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlots(56, 35, 3, 1), itemOutputs => itemOutputs.addSlots(102, 35, 4, 1),
        fluidInputs => fluidInputs.addSlot(36, 35), fluidOutputs => fluidOutputs.addSlot(122, 35),
        /* MODEL CONFIGUATION */
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "bronze_plated_bricks", "large_boiler", true, false, false,
    );
})