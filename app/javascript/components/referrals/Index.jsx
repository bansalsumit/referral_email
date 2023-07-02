import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';

export default function Referrals() {
  const navigate = useNavigate();
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams();
    params.append('user_id', '1');
    const url = `/users/homepage?${params.toString()}`;
    fetch(url)
      .then((res) => {
        console.log(res)
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => {
        console.log(res);
        setReferrals(res);
      })
      .catch(() => navigate("/"));
  }, []);

  const allReferrals = referrals.map((referral, index) => (
    <TableRow key={referral.id}>
      <TableCell>{referral.email}</TableCell>
    </TableRow>
  ))

  const noReferrals = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No Referred yet. Why not <Link to="/">create one</Link>
      </h4>
    </div>
  )

  function preventDefault(event) {
    event.preventDefault();
  }


  return (
    <React.Fragment>
      <Title>Referred Emails</Title>
      {allReferrals.length > 0 ?
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allReferrals}
        </TableBody>
        </Table> : noReferrals}
      
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
