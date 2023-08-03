import React, { useState, useEffect } from 'react'
import './App.css'
import data from './mock-data.json';
import Card from './Card'
import Filter from './Filter'
import ClearFilters from './ClearFilters'
import Header from './Header'
import Modal from './Modal'
import { reduce } from 'lodash-es'

interface JobData {
        id: number;
        company: string;
        logo: string;
        new: boolean;
        featured: boolean;
        position: string;
        role: string;
        level: string;
        postedAt: string;
        contract: string;
        location: string;
        languages: string[];
        tools: string[];
};

type DataWithFilters = JobData & { filters: string[]};

export default function JobsPage() {
  const [jobsData, setJobsData] = useState<DataWithFilters[] | null>(null);

  useEffect(() => {
    const newData = data.map((job) => {
        let jobFilters = [job.role, job.level];
        jobFilters = jobFilters.concat(job.languages, job.tools);
        return {...job, filters: jobFilters};
        // setJobsData({...job, filters: jobFilters})
      });
      // return newData;
      setJobsData(newData)
  }, [setJobsData]);

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [finalJobs, setFinalJobs] = useState<DataWithFilters[] | null>(null);
  const [jobClicked, setJobClicked] = useState('');

  

  useEffect(() => {
    const handleData = () => {
        const filteredArrayOfObjects = reduce<DataWithFilters, DataWithFilters[]>(
          jobsData,
          (acc, job) => {
            if (selectedFilters.every((filter) => job.filters.includes(filter))) {
              acc.push(job)
            }
            return acc
          },
          [],
        )
        setFinalJobs(filteredArrayOfObjects)
      };

    if (selectedFilters.length > 0) {
      handleData()
    } else {
      setFinalJobs(jobsData)
    }
  }, [selectedFilters, jobsData]);

  const handleFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget; // Use currentTarget instead of target
    const value = target.getAttribute('value'); // Get the value attribute
    if (!value) {
        return null;
    } else if (selectedFilters.includes(value)) {
      return null;
    } else {
      setSelectedFilters([...selectedFilters, value])
    }
  }

  const handleRemove = (event: { target: { value: any; }; }) => {
    setSelectedFilters(
      selectedFilters.filter((item) => item !== event.target.value),
    )
  }

  const clearFilters = () => {
    setSelectedFilters([])
  }

  return (
    <main className="font-sans relative">
      {jobClicked.length > 0 && (
        <div
          onClick={() => {
            setJobClicked('')
          }}
          className="overflow-auto scrollbar-hide z-10 fixed w-screen h-screen lg:px-40 px-10 py-20 drop-shadow-2xl bg-black bg-opacity-75"
        >
          <div
            onClick={(event) => {
              event.stopPropagation()
            }}
            className="mx-auto max-w-7xl"
          >
            <div className="">
              <Modal jobClicked={jobClicked} setJobClicked={setJobClicked} />
            </div>
          </div>
        </div>
      )}
      <Header />
      <section className="bg-lightCyan h-full pt-12">
        {selectedFilters.length > 0 && (
          <div className=" max-w-7xl mx-auto sm:px-20 px-5 -mt-14 lg:mb-0 mb-5">
            <div className="bg-white rounded-md">
              <div className="flex sm:justify-between justify-around px-4 py-1 items-center">
                <div className="flex flex-wrap">
                  {selectedFilters.map((filter, index) => (
                    <Filter
                      key={index}
                      filter={filter}
                      handleRemove={handleRemove}
                    />
                  ))}
                </div>
                <ClearFilters clearFilters={clearFilters} />
              </div>
            </div>
          </div>
        )}
        {!!finalJobs && finalJobs.map((jobs, index) => (
          <Card
            key={index}
            jobs={jobs}
            jobClicked={index}
            handleFilter={handleFilter}
            setJobClicked={setJobClicked}
          />
        ))}
      </section>
    </main>
  )
}