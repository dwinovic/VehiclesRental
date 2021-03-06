import { useRouter } from 'next/router';
import { MainLayout, SectionCard } from '../../../src/components';
import Pagination from '@material-ui/lab/Pagination';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { fetcher } from '../../../src/config/fetcher';
import Axios from '../../../src/config/Axios';
import { requireAuthentication } from '../../../src/utils';

const VehiclesType = ({ categories, roleUser }) => {
  // console.log('categories client', categories);
  const router = useRouter();
  const { type } = router.query;
  const [dataVehiclesType, setDataVehiclesType] = useState(categories?.data);
  const [totalPage, setTotalPage] = useState();

  const titlePage = type?.split('-').join(' ');

  // START = PAGINATION CONTROL
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    Axios.get(`/vehicles?page=${value}&limit=5`)
      .then((result) => {
        console.log('pagination', result);
        setDataVehiclesType(result.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    setPage(value);
  };

  // START = PAGINATION CONTROL

  // useEffect(() => {
  //   Axios.get(`/vehicles?limit=3`)
  //     .then((result) => {
  //       setDataVehiclesType(result.data.data);
  //       setTotalPage(result.data.meta);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // console.log('categories', categories);
  return (
    <MainLayout
      bgFooter="gray"
      title={titlePage}
      session={roleUser ? 'login' : false}
    >
      <StyledDetailTypes>
        <header className="container">
          <h1 className="heading-page">{categories?.meta.category}</h1>
          <p className="sub-heading">
            Click item to see details and reservation
          </p>
        </header>
        <SectionCard data={dataVehiclesType} anchor="vehicles-type/category" />
        <section className="container pagination-wrapper">
          <Pagination
            count={categories?.meta.totalPage}
            page={page}
            onChange={handleChange}
          />
        </section>
        <p className="no-content">There is no vehicle left</p>
      </StyledDetailTypes>
    </MainLayout>
  );
};

// // START = SERVER SIDE PROPS
export const getServerSideProps = requireAuthentication(async (context) => {
  let categories;
  try {
    const { req, res, params } = context;
    const roleUser = res.role;

    // const resCategory = await Axios.get('/category');
    const resCategory = await Axios(
      `/vehicles?category=${params.type}&limit=5`
    );
    categories = resCategory.data;
    console.log(categories);

    // const resDataVehicle = await Axios.get(`/vehicles/${params.idVehicle}`, {
    //   withCredentials: true,
    //   headers: context.req ? { cookie: context.req.headers.cookie } : undefined,
    // });
    // console.log('resDataVehicle', dataVehicle);
    // Pass post data to the page via props
    return {
      props: {
        categories,
        roleUser,
      },
    };
  } catch (error) {
    // console.log(error);
    dataVehicle = error.response;
    return { props: { categories } };
  }
});
// // END = SERVER SIDE PROPS

// START = STATIC GENERATION
// export async function getStaticPaths() {
//   const res = await Axios.get('/category');

//   const paths = res.data.data.map((category) => ({
//     params: { type: category.name },
//   }));
//   console.log(paths);

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   let categories;
//   console.log(params.type);
//   try {
//     const res = await Axios(`/vehicles?category=${params.type}&limit=5`);
//     categories = res.data;
//     console.log(categories);
//     // Pass post data to the page via props
//     return { props: { categories } };
//   } catch (error) {
//     categories = error.response;
//     console.log(categories);
//     return { props: { categories } };
//   }
// }
// END = STATIC GENERATION

// START = STYLING THIS PAGE
const StyledDetailTypes = styled.div`
  margin-top: 70px;

  /* START = HEADER SECTION */
  header.container {
    .heading-page {
      font-family: Playfair Display;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 50px;
      color: #000000;
      mix-blend-mode: normal;
      margin-bottom: 22px;
    }
    .sub-heading {
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 50px;
      text-align: center;
      color: #b8becd;
    }
  }
  .no-content {
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: #b8becd;
    text-align: center;
    margin-top: 50px;
  }
  /* END = HEADER SECTION */

  /* START = PAGINATION SECTION */
  .pagination-wrapper {
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
  }
  /* END = PAGINATION SECTION */
`;
// END = STYLING THIS PAGE

export default VehiclesType;
