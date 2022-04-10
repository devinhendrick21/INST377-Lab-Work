import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

const router = express.Router();

//router.get('/', (req, res) => {
  //  console.log('You touched the food service route!');
    //res.json({message: 'Welcome to the PG County food API!'});
     //res.send('Welcome to the UMD Dining API!');
  //});
  router.route('/')
  .get(async (req, res) => {
    try {
      console.log('You touched the food service route!');
      const url = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
      const data = await fetch(url);
      const json = await data.json();
      console.log(json);

      res.json({data: json});
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'put FoodServices endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .post((req, res) => {
    try {
      console.log('Touched post endpoint', req.body);
      console.log(req.body?.resto);
      res.json({message: 'post FoodServices endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'delete FoodServices endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });
  export default router;