import { SearchInput, SectionCard } from '../../src/components';
import { MainLayout } from '../../src/components/layout';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../src/config/fetcher';
import { useForm } from 'react-hook-form';
import Axios from '../../src/config/Axios';
import axios from 'axios';
import { useRouter } from 'next/router';
import { requireAuthentication } from '../../src/utils';

const VehiclesType = ({
  dataCategory,
  searchResult,
  avatar,
  roleUser,
  cookie,
}) => {
  const [isShowSort, setIsShowSort] = useState(false);
  const [sortSelected, setSortSelected] = useState();
  const router = useRouter();
  const query = router.query;
  // console.log(query);
  // START = SEARCHING FEATURE
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   // setDataVehiclesType(data?.data);
  //   // onSearching();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [getValues('search')]);

  const onSearching = async () => {
    const keyword = getValues('search');
    const sort = sortSelected?.split(' ');
    if (sort && keyword) {
      return router.push({
        pathname: `/vehicles-type`,
        query: {
          search: keyword,
          field: sort[0],
          sort: sort[1],
        },
      });
    }
    if (sort) {
      return router.push({
        pathname: `/vehicles-type`,
        query: {
          field: sort[0],
          sort: sort[1],
        },
      });
    }
    if (keyword) {
      return router.push({
        pathname: `/vehicles-type`,
        query: {
          search: keyword,
        },
      });
    }
  };

  // console.log('searchResult:', searchResult);
  // END = SEARCHING FEATURE
  // START = HANDLE SORT SELECTED
  const sortHandle = (target) => {
    setSortSelected(target);
    setIsShowSort(false);
  };
  return (
    <MainLayout
      bgFooter="gray"
      title="Vehicles Types"
      avatar={avatar}
      session={roleUser ? 'login' : false}
    >
      <StyledVehiclesType>
        <section className="container">
          <form className="search-wrapper">
            <SearchInput
              placeholder="Search"
              {...register('search')}
              onClick={handleSubmit(onSearching)}
            />
            <div
              className="sort-wrapper"
              onClick={() => {
                isShowSort ? setIsShowSort(false) : setIsShowSort(true);
              }}
            >
              <p>Filter</p>
              <svg
                width="26"
                height="15"
                viewBox="0 0 26 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0536 0.681818L14.625 7.95455C13.6964 8.86364 12.3036 8.86364 11.375 7.95455L3.94643 0.681818C3.01786 -0.227273 1.625 -0.227273 0.69643 0.681818C-0.232141 1.59091 -0.232141 2.95455 0.69643 3.86364L11.375 14.3182C12.3036 15.2273 13.6964 15.2273 14.625 14.3182L25.3036 3.86364C26.2321 2.95455 26.2321 1.59091 25.3036 0.681818C24.375 -0.227273 22.9821 -0.227273 22.0536 0.681818Z"
                  fill="#B8BECD"
                />
              </svg>
            </div>
            {isShowSort && (
              <div className="option-sort">
                <div className="row" onClick={() => sortHandle('price ASC')}>
                  <p>Cheapest Price</p>
                </div>
                <div className="row" onClick={() => sortHandle('price DESC')}>
                  <p>Most expensive</p>
                </div>
              </div>
            )}
          </form>
        </section>
        {dataCategory &&
          dataCategory.map((category, index) => {
            return (
              <SectionCard
                key={index}
                heading={category.category}
                data={category.data}
                anchor={`vehicles-type/${category.category}`}
              />
            );
          })}
        {/* DATA SEARCH NOT FOUND */}
        {searchResult?.statusCode === 404 && (
          <h1 className="container header-result">
            {searchResult?.meta.keyword} Not found
          </h1>
        )}
        {/* DATA SEARCH FOUND*/}
        {searchResult?.statusCode === 200 && (
          <>
            <h1 className="container header-result">
              Showing results for{' '}
              {searchResult?.meta.keyword
                ? searchResult?.meta.keyword
                : `${router.query.category} in ${router.query.location}`}
            </h1>
            <SectionCard data={searchResult.data} />
          </>
        )}
      </StyledVehiclesType>
    </MainLayout>
  );
};

// export async function getServerSideProps(ctx) {
//   const { query } = ctx;

//   // INITIAL SHOW DATA
//   const checkQuery = Object.keys(query).length;
//   if (!checkQuery) {
//     const dataCategory = await axios
//       .all([
//         // Remember to replace the api\_key with a valid one.
//         axios.get('http://localhost:3030/v1/vehicles?category=popular in town'),
//         axios.get('http://localhost:3030/v1/vehicles?category=motor'),
//         axios.get('http://localhost:3030/v1/vehicles?category=cars'),
//         axios.get('http://localhost:3030/v1/vehicles?category=bike'),
//       ])
//       .then(
//         axios.spread(function (popular, motor, cars, bike) {
//           //... but this callback will be executed only when all requests are complete.
//           const dataCategory = [
//             {
//               category: 'Popular in town',
//               data: popular.data.data,
//             },
//             {
//               category: 'Motors',
//               data: motor.data.data,
//             },
//             {
//               category: 'Cars',
//               data: cars.data.data,
//             },
//             {
//               category: 'Bikers',
//               data: bike.data.data,
//             },
//           ];
//           return dataCategory;
//         })
//       )
//       .catch((errors) => {
//         // console.log(errors.response);
//       });

//     return { props: { dataCategory } };
//   }

//   // HAVE QUERY PARAMS
//   if (checkQuery) {
//     let searchResult = {};
//     // SEARCH AND FILTER FOR PAGE VEHICLES TYPE
//     if (query?.search && query?.sort) {
//       try {
//         const resData = await Axios.get(
//           `/vehicles?src=${query?.search ? query?.search : ''}&field=${
//             query?.field ? query?.field : 'price'
//           }&sort=${query?.sort ? query?.sort : 'DESC'}`
//         );
//         searchResult = resData.data;
//         return { props: { searchResult } };
//       } catch (error) {
//         // console.log(error.response.data);
//         searchResult = error.response.data;
//         return { props: { searchResult } };
//       }
//     }
//     // FILTER FOR PAGE HOME
//     if (query?.category && query?.location) {
//       try {
//         const resData = await Axios.get(
//           `/vehicles?location=${query?.location}&category=${query?.category}`
//         );
//         searchResult = resData.data;
//         return { props: { searchResult } };
//       } catch (error) {
//         // console.log(error.response.data);
//         searchResult = error.response.data;
//         return { props: { searchResult } };
//       }
//     }
//   }
// }

export const getServerSideProps = requireAuthentication(async (context) => {
  try {
    const { req, res, params, query } = context;
    let avatar = '';
    if (res.avatar) {
      avatar = res.avatar;
    }
    const roleUser = res.role;
    const cookie = context.req.headers.cookie;
    // INITIAL SHOW DATA
    const checkQuery = Object.keys(query).length;
    if (!checkQuery) {
      const dataCategory = await axios
        .all([
          // Remember to replace the api\_key with a valid one.
          axios.get(
            'http://localhost:3030/v1/vehicles?category=popular in town'
          ),
          axios.get('http://localhost:3030/v1/vehicles?category=motor'),
          axios.get('http://localhost:3030/v1/vehicles?category=cars'),
          axios.get('http://localhost:3030/v1/vehicles?category=bike'),
        ])
        .then(
          axios.spread(function (popular, motor, cars, bike) {
            //... but this callback will be executed only when all requests are complete.
            const dataCategory = [
              {
                category: 'Popular In Town',
                data: popular.data.data,
              },
              {
                category: 'Motors',
                data: motor.data.data,
              },
              {
                category: 'Cars',
                data: cars.data.data,
              },
              {
                category: 'Bikers',
                data: bike.data.data,
              },
            ];
            return dataCategory;
          })
        )
        .catch((errors) => {
          // console.log(errors.response);
        });

      return { props: { dataCategory, avatar, roleUser, cookie } };
    }

    // HAVE QUERY PARAMS
    if (checkQuery) {
      let searchResult = {};
      // SEARCH AND FILTER FOR PAGE VEHICLES TYPE
      if (query?.search || query?.sort) {
        try {
          const resData = await Axios.get(
            `/vehicles?src=${query?.search ? query?.search : ''}&field=${
              query?.field ? query?.field : 'price'
            }&sort=${query?.sort ? query?.sort : 'DESC'}`,
            { withCredentials: true }
          );
          searchResult = resData.data;
          console.log('searchResult', searchResult);
          return {
            props: {
              searchResult: searchResult,
              avatar: avatar,
              roleUser: roleUser,
              cookie: cookie,
            },
          };
        } catch (error) {
          // console.log(error.response.data);
          searchResult = error.response.data;
          return {
            props: {
              searchResult: searchResult,
              avatar: avatar,
              roleUser: roleUser,
              cookie: cookie,
            },
          };
        }
      }
      // FILTER FOR PAGE HOME
      if (query?.category || query?.location) {
        try {
          const resData = await Axios.get(
            `/vehicles?location=${query?.location}&category=${query?.category}`,
            { withCredentials: true }
          );
          searchResult = resData.data;
          return {
            props: {
              searchResult: searchResult,
              avatar: avatar,
              roleUser: roleUser,
              cookie: cookie,
            },
          };
        } catch (error) {
          // console.log(error.response.data);
          searchResult = error.response.data;
          return {
            props: {
              searchResult: searchResult,
              avatar: avatar,
              roleUser: roleUser,
              cookie: cookie,
            },
          };
        }
      }
    }
  } catch (error) {}
});

// START = STYLING FOR THIS PAGE

const StyledVehiclesType = styled.div`
  /* START = SECTION SEARCH FEATURE */
  section.container {
    .search-wrapper {
      margin-top: 70px;
      display: flex;
      gap: 24px;
      position: relative;
      z-index: 1;
      .sort-wrapper {
        width: 75px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 6px;
        border: 0.8px solid #afb0b9;
        border-radius: 6px;
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        &:hover {
          cursor: pointer;
          opacity: 0.5;
        }
      }
      .option-sort {
        background: #ffffff;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.23);
        border-radius: 10px;
        position: absolute;
        right: 0;
        top: 90px;
        width: 150px;
        .row {
          padding: 10px 8px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.23);
          &:hover {
            opacity: 0.4;
            cursor: pointer;
          }
          p {
            text-align: center;
          }
        }
      }
    }
  }
  /* END = SECTION SEARCH FEATURE */
  .header-result {
    margin-top: 20px;
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 50px;
    color: #000000;
  }
`;
// END = STYLING FOR THIS PAGE

export default VehiclesType;
