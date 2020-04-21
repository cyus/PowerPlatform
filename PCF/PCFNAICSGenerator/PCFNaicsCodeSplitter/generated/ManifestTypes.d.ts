/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
	NAICS2Control: any;
	NAICS4Control: any;
	NAICS6Control: any;
    sampleProperty: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    NAICSCode?: string;
}
