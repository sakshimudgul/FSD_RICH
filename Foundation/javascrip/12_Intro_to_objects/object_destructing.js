
// #############################3333333 Object Destructing #######################################33333333333
/*
const band = {
    bandName : "led Zeppline",
    famousSongs : "Stairway to heaven",
};

 const bandName = band.bandName;
 const famousSongs = band.famousSongs;

 console.log(bandName,famousSongs);
 */

//  ###############  ####################   ###################   ##############

//other way to destructure

// const band = {
//     bandName : "Led Zeppline",
//     famoussSongs : "Stairway to heaven",
// }

// first we need to  decide we want const let or var
// we want two  variables 
// const{bandName,famousSongs}=band;
// console.log(bandName,famousSongs);

// ##########   #############  ##################   ############
 
// const band ={
//     bandName : "Led Zeppline",
//     famousSongs : "Satairway to heaven ",
// }

// frist we need to decide we want const let or var
// we want two variables

// const{bandName,famousSongs}=band;
// bandName = "Queen";  --- error (we cannot change  const)

// console.log(bandName, famousSongs);


// let{bandName , famousSongs} = band;
// bandName ="Queen";
// // here it is changed

// console.log(bandName,famousSongs);

// ###############  ###############  #################  ################


// const band = {
//      bandName : "Led Zeppline",
//      famousSongs : "Stairway to heaven ",
//      year : 1993,
//      otherSongs : "preet re", 
//     };

    // first we need to decide we want constant let or var
    // we want two variables

    // const{bandName,famousSongs} = band;
    // console.log(bandName,famousSongs);

    // let{bandName,famousSongs} = band;
    // console.log(bandName,famousSongs);

    // here year key and its value is in object
    // it is not distructed.



    // ####################   ########################   ##################### 

    // const band = {
    //  bandName : "Led Zeppline",
    //  famousSongs : "Stairway to heaven ",
    //  year : 1993,
    //  otherSongs : "preet re", 
    // };

    //  // first we need to decide we want constant let or var
    // // we want two variables\

    //  const{bandName,famousSongs} = band;

    //  let {bandName : var1 , famousSongs : var2} = band;
    //  console.log(var1,var2);


       // ####################   ########################   ##################### 

    const band = {
     bandName : "Led Zeppline",
     famousSongs : "Stairway to heaven ",
     year : 1993,
     otherSongs : "preet re", 
    };

     // first we need to decide we want constant let or var
    // we want two variables\

    //  const{bandName,famousSongs} = band;

     let {bandName ,famousSongs,...restprops} = band;
     console.log(bandName ,famousSongs,restprops);

     // Adding remaining key value pairs as object in variable.