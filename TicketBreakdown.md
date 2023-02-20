# ticket-breakdown

## Ticket 1: Create an API endpoint for Facilities to save custom Agent ids

### Description: Create an API endpoint for Facilities to save their custom Agent ids on the platform. This will allow them to easily reference these ids when generating reports.

### Acceptance Criteria:

A new API endpoint /facilities/<facility_id>/agents/<agent_id>/custom_id is created
Facilities are able to set a custom id for each Agent they work with
Custom ids are stored in the database and associated with the corresponding Agent record
Custom ids can be retrieved using the getShiftsByFacility function and included in the generated reports
Time/effort estimate: 2-3 days

### Implementation details:

Add a new field custom_id to the Agents table in the database
Create a new Flask endpoint that allows Facilities to set custom ids for Agents
When generating reports, retrieve custom ids for each Agent and include them in the report

## Ticket 2: Update the report generation process to use custom Agent ids

### Description: Update the report generation process to use the custom ids saved by Facilities for each Agent instead of the internal database ids.

### Acceptance Criteria:

The generateReport function retrieves custom ids for each Agent from the database
Custom ids are used in the generated report instead of the internal database ids
Time/effort estimate: 1-2 days

### Implementation details:

Update the generateReport function to retrieve custom ids for each Agent
Replace the use of internal database ids with custom ids in the generated report


## Ticket 3: Add a feature to allow Facilities to search for Agents using custom ids

### Description: Add a feature to the platform that allows Facilities to search for Agents using the custom ids they have set.

### Acceptance Criteria:

A new API endpoint /facilities/<facility_id>/agents/search?custom_id=<custom_id> is created
Facilities can search for Agents using custom ids
Results of the search include Agents' custom ids
Time/effort estimate: 1-2 days

### Implementation details:

Create a new Flask endpoint that allows Facilities to search for Agents using custom ids
Modify the existing getShiftsByFacility function to allow searching by custom ids

## Ticket 4: Add validation to the custom Agent id input

### Description: Add validation to the custom Agent id input to ensure that custom ids are unique and meet certain requirements.

### Acceptance Criteria:

Custom ids must be unique across all Agents associated with the same Facility
Custom ids must be at least 4 characters long
Custom ids may only contain alphanumeric characters
Time/effort estimate: 1-2 days

### Implementation details:

Add a uniqueness constraint to the custom_id field in the Agents table
Validate custom ids in the API endpoint that allows Facilities to set custom ids
Add error handling to the API endpoint to return appropriate error messages when validation fails

## Ticket 5: Update the database schema to support custom Agent ids

### Description: Update the database schema to support custom Agent ids, including adding a new column to the Shifts table to store the custom id of the assigned Agent.

### Acceptance Criteria:

A new column custom_agent_id is added to the Shifts table
The getShiftsByFacility function retrieves the custom_agent_id column for each Shift
The generateReport function includes the custom_agent_id in the generated report
Time/effort estimate: 1-2 days

### Implementation details:

Add a new column custom_agent_id to the Shifts table in the database
Modify the getShiftsByFacility function to retrieve the custom_agent_id column for each Shift
Modify
