'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, KeyboardEvent, Suspense, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const figureTypes = ['Politician', 'Celebrity', 'Journalist', 'Activist']
const figureSexes = ['Male', 'Female', 'Other']

  const currentParties = [
    "Democrat",
    "Republican",
    "Independent",
    "Libertarian",
    "Green",
    "Constitution",
    "Forward Party",
    "No Labels",
  ];

  const historicalParties = [
    "Federalist",
    "Democratic-Republican",
    "Whig",
    "Know-Nothing",
    "Free Soil",
    "Populist",
    "Progressive/Bull Moose",
    "States' Rights/Dixiecrat",
    "American Independent",
    "Socialist",
    "Communist Party USA",
    "Peace and Freedom",
    "Reform Party",
    "Prohibition Party",
    "Workers World Party",
    "American Solidarity",
  ];

  const allParties = currentParties.concat(historicalParties);

export default function AdvSearch({ placeholder }: { placeholder: string }) {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [ userSearch, setUserSearch ] = useState(searchParams.get('query') || '');

  const [ showType, setShowType ] = useState(false);
  const [ showSex, setShowSex ] = useState(false);
  const [ showParty, setShowParty ] = useState(false);
  const [ showExlude, setShowExclude ] = useState(false);
  const [ showPrioritize, setShowPrioritize ] = useState(false);
  const [ showDate, setShowDate ] = useState(false);
  const [ showLocation, setShowLocation ] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showHistorical, setShowHistorical] = useState(false);
  const [disableParty, setDisableParty] = useState(true);

  const [types, setTypes] = useState<string[]>(
    searchParams.getAll("types").length > 0
      ? searchParams.getAll("types")
      : figureTypes.map(p => p.toLowerCase())
  );
  const [sexes, setSexes] = useState<string[]>(
    searchParams.getAll("sexes").length > 0
      ? searchParams.getAll("sexes")
      : figureSexes.map(p => p.toLowerCase())
  );
  const [parties, setParties] = useState<string[]>(
    searchParams.getAll("parties").length > 0
      ? searchParams.getAll("parties")
      : allParties.map(p => p.toLowerCase())
  );
  const [ params, setParams ] = useState(new URLSearchParams(searchParams));

  function formatMultiParam(array: string[]){
    var returnStr = '';
    array.forEach(p => returnStr = returnStr.concat(p + " "));
    returnStr = returnStr.substring(0, returnStr.length-1);

    return(returnStr);
  }

  function executeSearch(){
    var val = userSearch;
    console.log("execute: " + val)
    if (val) {
      params.set('query', val);
      params.set('type', formatMultiParam(types));
      params.set('sex', formatMultiParam(sexes));
      //params.set('exclude', formatMultiParam())
      //params.set('prioritize', formatMultiParam())
      //params.set('date', formatMultiParam())
      //params.set('location', formatMultiParam())
      if(disableParty){
        params.set('parties', 'any');
      }
      else{
        params.set('parties', formatMultiParam(parties));
      }
      console.log("setting")
    } else {
      params.delete('query');
      console.log("deleting")
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleTypeChange = (type: string, checked: boolean) => {
    setTypes(prev =>
      checked ? [...prev, type] : prev.filter(p => p !== type)
    );
  };

  const handleSexChange = (sex: string, checked: boolean) => {
    setSexes(prev =>
      checked ? [...prev, sex] : prev.filter(p => p !== sex)
    );
  };

  const handlePartyChange = (party: string, checked: boolean) => {
    setParties(prev =>
      checked ? [...prev, party] : prev.filter(p => p !== party)
    );
  };

  const toggleDisabled = (checked: boolean) => {
    setDisableParty(checked);
    // Optional: clear selections when disabling
    const partyCheckboxes = document.querySelectorAll<HTMLInputElement>('input[name="party"]');
    partyCheckboxes.forEach(cb => {
      cb.checked = false;
    });
  };

  return (
    <div className='w-full max-w-xl mx-auto'>
      <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id='userInput'
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          onKeyDown={(e) => {
            if(e.key == "Enter"){
              executeSearch();
            }
            }
          }
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
        />
      </div>
      {/* Type of Figure */}
      <div className="mt-4">
        <button 
          className="flex items-center justify-center w-full text-sm font-medium text-gray-700 hover:underline"
          onClick={() => setShowType(!showType)}
        >
          <span>Type of Figure</span>
          <span className="ml-2">{showType ? '▲' : '▼'}</span>
        </button>
        {showType &&
          <div className="space-y-1 mt-1">
            {figureTypes.map(type => {
              const val = type.toLowerCase();
              return (
                <label key={val} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="type"
                    value={val}
                    checked={types.includes(val)}
                    onChange={(e) => handleTypeChange(val, e.target.checked)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">{type}</span>
                </label>
              );
            })}
          </div>
        }
        
      </div>

      {/* Sex */}
      <div className="mt-4">
        <button 
          className="flex items-center justify-center w-full text-sm font-medium text-gray-700 hover:underline"
          onClick={() => setShowSex(!showSex)}
        >
          <span>Sex</span>
          <span className="ml-2">{showSex ? '▲' : '▼'}</span>
        </button>
        { showSex &&
          <div className="space-y-1 mt-1">
            {figureSexes.map(sex => {
              const val = sex.toLowerCase();
              return (
                <label key={val} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="sex"
                    value={val}
                    checked={sexes.includes(val)}
                    onChange={(e) => handleSexChange(val, e.target.checked)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">{sex}</span>
                </label>
              );
            })}

          </div>
        }
      </div>

      {/* Party Affiliation */}
      <div className="mt-4">
      <button 
          className="flex items-center justify-center w-full text-sm font-medium text-gray-700 hover:underline"
          onClick={() => setShowParty(!showParty)}
        >
          <span>Party Affiliation</span>
          <span className="ml-2">{showParty ? '▲' : '▼'}</span>
        </button>
      { showParty &&
      <div className="space-y-1 mt-1">

        {/* Disable toggle */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="disableParty"
            checked={disableParty}
            onChange={(e) => toggleDisabled(e.target.checked)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <span className="text-sm text-gray-700">Any / Not Applicable</span>
        </label>

        {/* Collapsible: Current Parties */}
        <div className="mt-2">
          <button 
            className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:underline"
            onClick={() => setShowCurrent(!showCurrent)}
          >
            <span>Current</span>
            <span className="ml-2">{showType ? '▲' : '▼'}</span>
          </button>
          {showCurrent && (
            <div className="mt-2 space-y-1">
              {currentParties.map(party => {
                const val = party.toLowerCase();
                return (
                  <label key={val} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={val}
                      checked={parties.includes(val)}
                      disabled={disableParty}
                      onChange={(e) => handlePartyChange(val, e.target.checked)}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">{party}</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* Collapsible: Historical Parties */}
        <div className="mt-2">
          <button 
            className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:underline"
            onClick={() => setShowHistorical(!showHistorical)}
          >
            <span>Historical</span>
            <span className="ml-2">{showHistorical ? '▲' : '▼'}</span>
          </button>
          {showHistorical && (
            <div className="mt-2 space-y-1">
              {historicalParties.map(party => {
                const val = party.toLowerCase();
                return (
                  <label key={val} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={val}
                      checked={parties.includes(val)}
                      disabled={disableParty}
                      onChange={(e) => handlePartyChange(val, e.target.checked)}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">{party}</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

      </div>
      }
      
    </div>

      {/* Exclude */}
      <div className="mt-4">
        <button 
          className="flex items-center justify-center w-full text-sm font-medium text-gray-700 hover:underline"
          onClick={() => setShowExclude(!showExlude)}
        >
          <span>Exclude (name)</span>
          <span className="ml-2">{showExlude ? '▲' : '▼'}</span>
        </button>
        { showExlude &&
        <input
          type="text"
          id="exclude"
          name="exclude"
          placeholder="e.g. Trump, Biden"
          className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
        />
        }
      </div>

      {/* Prioritize */}
      <div className="mt-4">
        <button 
          className="flex items-center justify-center w-full text-sm font-medium text-gray-700 hover:underline"
          onClick={() => setShowPrioritize(!showPrioritize)}
        >
          <span>Prioritize (names, topics)</span>
          <span className="ml-2">{showPrioritize ? '▲' : '▼'}</span>
        </button>
        { showPrioritize &&
        <input
          type="text"
          id="prioritize"
          name="prioritize"
          placeholder="e.g. Obama, economy"
          className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
        />
        }
      </div>

      {/* Date Range */}
      <div className="mt-4">
        <button 
          className="flex items-center justify-center w-full text-sm font-medium text-gray-700 hover:underline"
          onClick={() => setShowDate(!showDate)}
        >
          <span>Date Range</span>
          <span className="ml-2">{showDate ? '▲' : '▼'}</span>
        </button>
        { showDate &&
        <div className="flex space-x-2 mt-1">
          <input
            type="date"
            id="startDate"
            name="startDate"
            className="block w-1/2 rounded-md border border-gray-200 py-2 pl-3 text-sm"
          />
          <input
            type="date"
            id="endDate"
            name="endDate"
            className="block w-1/2 rounded-md border border-gray-200 py-2 pl-3 text-sm"
          />
        </div>
        }
      </div>

      {/* Location */}
      <div className="mt-4">
        <button 
          className="flex items-center justify-center w-full text-sm font-medium text-gray-700 hover:underline"
          onClick={() => setShowLocation(!showLocation)}
        >
          <span>Location</span>
          <span className="ml-2">{showLocation ? '▲' : '▼'}</span>
        </button>
        { showLocation &&
        <input
          type="text"
          id="location"
          name="location"
          placeholder="e.g. Washington DC"
          className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
        />
        }
      </div>

      {/* Search Button */}
      <div className='pt-3'>
        <button
        className='px-2 py-1 border-black border-2 rounded-xl text-lg bg-burgundy text-golden rounded hover:bg-burgundyLight transition'
        onClick={executeSearch}
        >
          Search
        </button>
      </div>

    </div>  
  );
}
