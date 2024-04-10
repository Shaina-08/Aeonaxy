  import React, { useState } from "react";
      import { zodResolver } from "@hookform/resolvers/zod";
      import { useForm } from "react-hook-form";
      import { z } from "zod";
      
      import { Button } from "@/components/ui/button";
      import {
        Form,
        FormControl,
        FormDescription,
        FormField,
        FormItem,
        FormLabel,
        FormMessage,
      } from "@/components/ui/form";
      import {
        Select,
        SelectContent,
        SelectItem,
        SelectTrigger,
        SelectValue,
      } from "@/components/ui/select";
      import { toast } from "@/components/ui/use-toast";
import { Progress } from "./components/ui/progress";
import { Checkbox } from "./components/ui/checkbox";
      
      const FormSchema = z.object({
        items: z.array(z.string()).refine((value) => value.some((item) => item), {
          message: "You have to select at least one item.",
        }),
        text: z
          .string({
            required_error: "Please answer the question.",
          })
         
      });
      
      const About = () => {
        const form = useForm({
          resolver: zodResolver(FormSchema),
        });
        const handleNext = () => {
          window.location.href = 'https://aeonaxy-assignment-hotl0a85u-shaina-08.vercel.app/'; 
        };
        const items = [
          {
            id: "recents",
            label: "Create an online course",
          },
          {
            id: "home",
            label: "Create a coaching program",
          },
          {
            id: "applications",
            label: "Create a digital download(ebook, article, template, worksheet, etc.",
          },
          {
            id: "desktop",
            label: "Create a community or forum",
          },
          {
            id: "downloads",
            label: "I'm not sure yet",
          },
          {
            id: "documents",
            label: "Something else (please tell us more)",
          },
        ]    
        const [selectedItems, setSelectedItems] = useState([]);
        const handleCheckboxChange = (itemId) => {
          setSelectedItems((prevSelectedItems) => {
            if (prevSelectedItems.includes(itemId)) {
              return prevSelectedItems.filter((value) => value !== itemId);
            } else {
              return [...prevSelectedItems, itemId];
            }
          })}
       
        function onSubmit(data) {
          toast({
            title: "You submitted the following values:",
            description: (
              <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">{JSON.stringify(data, null, 2)}</code>
              </pre>
            ),
          });
        }
        
      
        return (
<>

  <Progress value={50}  className="h-2"/>
   <div className="flex  flex-col justify-center items-center my-5 ">

  <div className='tellmore'>Tell us a little more about yourself</div>
     <p className="info">Your answers will help us build an experience to match your needs</p>

     <div className="absolute right-8 top-100 bg-black px-3 py-1 flex flex-row rounded h-9">
     <span className="material-symbols-outlined text-white font-bold  py-1 text-base">
    Help 
    </span>    
        <p className="text-white font-bold text-sm py-2 mx-1 text-xs">Help</p> 
            </div>
          <Form {...form}>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-0.45 space-y-6">
              <FormField
                
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem  >
                    <FormLabel className="question flex xl:text-base "> Do you currently run an online business? </FormLabel>
                    <Select  onValueChange={field.onChange} defaultValue={field.value} className="text-base color-black font-bold">
                      <FormControl>
                        <SelectTrigger  className="rounded font-bold text-gray-700 text-sm h-10 w-2/3 mx-14 border-gray-400 hover:bg-gray-100 hover:outline-gray-600">
                          <SelectValue     placeholder="Please choose an option..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent style={{ color: 'black' , fontWeight:"500", backgroundColor:"white" }} >
                        <SelectItem  value="Yes" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white" , width:"500px" }}>Yes</SelectItem>
                        <SelectItem value="No" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"}}>No, just exploring!</SelectItem>
                      </SelectContent>
                    </Select>
                  
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem  >
                    <FormLabel className="question flex mb-1 xl:text-base">I primarily identify as a:</FormLabel>
                    <Select  onValueChange={field.onChange} defaultValue={field.value} className="text-base color-black font-bold">
                      <FormControl>
                        <SelectTrigger  className="rounded font-bold text-gray-700 text-sm h-10 w-2/3 mx-14 border-gray-400">
                          <SelectValue     placeholder="Please choose an option..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent style={{ color: 'black' , fontWeight:"500", backgroundColor:"white" }} >
                        <SelectItem  value="Student" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"  }}>Student</SelectItem>
                        <SelectItem value="Freelancer" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"}}>Freelancer or Consultant (project-based work)</SelectItem>
                        <SelectItem value="Engineer" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"}}>Engineer</SelectItem>

                     
                      </SelectContent>
                    </Select>
                  
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem  >
                    <FormLabel className="question flex mb-1 xl:text-base">Are you teaching or offering content oline?</FormLabel>
                    <Select  onValueChange={field.onChange} defaultValue={field.value} className="text-base color-black font-bold">
                      <FormControl>
                        <SelectTrigger  className="rounded font-bold text-gray-700 text-sm w-2/3 mx-14 h-10 border-gray-400">
                          <SelectValue     placeholder="Please choose an option..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent style={{ color: 'black' , fontWeight:"500", backgroundColor:"white" }} >
                        <SelectItem  value="Yesstarted" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white" , width:"500px" }}>Yes</SelectItem>
                        <SelectItem value="Notyet" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"}}>No, I'm just getting started sharing my knowledge</SelectItem>
                      </SelectContent>
                    </Select>
                  
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem  >
                    <FormLabel className="question flex mb-1 xl:text-base ">How big is your current audience(email list,social media followers, subscribers, etc.)?</FormLabel>
                    <Select  onValueChange={field.onChange} defaultValue={field.value} className="text-base color-black font-bold">
                      <FormControl>
                        <SelectTrigger  className="rounded font-bold text-gray-700 text-sm  w-2/3 mx-14 h-10 border-gray-400">
                          <SelectValue     placeholder="Please choose an option..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent style={{ color: 'black' , fontWeight:"500", backgroundColor:"white" }} >
                        <SelectItem  value="Nano" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"  }}>1-10 people</SelectItem>
                        <SelectItem value="Micro" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"}}>1-100 people</SelectItem>
                        <SelectItem value="Mega" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"}}>1-1,000 people</SelectItem>

                     
                      </SelectContent>
                    </Select>
                  
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem  >
                    <FormLabel className="question flex mb-1 xl:text-base">Which topic is most relevant to your business or content?</FormLabel>
                    <Select  onValueChange={field.onChange} defaultValue={field.value} className="text-base color-black font-bold">
                      <FormControl>
                        <SelectTrigger  className="rounded font-bold text-gray-700 text-sm w-2/3 mx-14 h-10 border-gray-400">
                          <SelectValue     placeholder="Please choose an option..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent style={{ color: 'black' , fontWeight:"500", backgroundColor:"white" }} >
                        <SelectItem  value="Photo" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"  }}>Photo & Video</SelectItem>
                        <SelectItem value="Education" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"}}>Education</SelectItem>
                        <SelectItem value="Fashion" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"}}>Fashion</SelectItem>

                     
                      </SelectContent>
                    </Select>
                  
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
                <FormField
                
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem  >
                    <FormLabel className="question flex mb-1 xl:text-base">Approximately how much money do you make charging for your knowledge today (in courses,consulting,books,speaking,etc.)? We ask this so that we can provide you with relevant resources for the size and stage of your business.</FormLabel>
                    <Select  onValueChange={field.onChange} defaultValue={field.value} className="text-base color-black font-bold">
                      <FormControl>
                        <SelectTrigger  className="rounded font-bold text-gray-700 text-sm w-2/3 mx-14 h-10 border-gray-400">
                          <SelectValue     placeholder="Please choose an option..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent style={{ color: 'black' , fontWeight:"500", backgroundColor:"white" }} >
                        <SelectItem  value="Market" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"  }}>Accordig to market</SelectItem>
                        <SelectItem value="Relevant" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"}}>Relevant</SelectItem>
                        <SelectItem value="noanswer" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"}}>I prefer not to answer</SelectItem>

                     
                      </SelectContent>
                    </Select>
                  
                    
                    <FormMessage />
                  </FormItem>
                )}
              />

               <FormLabel className="question flex mb-1 xl:text-base">What are you hoping to do first on Teachable? (Select up to 3 to get started as quickly as possible)</FormLabel>
             {items.map((item) => (
                <FormField
                  
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    const isChecked = selectedItems.includes(item.id);
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-1 space-y-0 "
                      >

                        <FormControl>
                        <Checkbox
                       className="checkbox"
              checked={isChecked}
              onCheckedChange={(checked) => handleCheckboxChange(item.id)}
            
            />
                        </FormControl>
                        <FormLabel className="text-sm font-normal ">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
             ))}
            
            <FormField
                
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem  >
                    <FormLabel className="question flex mb-1 xl:text-base">How much content or training material(videos,worksheets,downloads,etc.) have you already prepared?</FormLabel>
                    <Select  onValueChange={field.onChange} defaultValue={field.value} className="text-base color-black font-bold">
                      <FormControl>
                        <SelectTrigger  className="rounded font-bold text-gray-700 text-sm h-10 w-2/3 mx-14 border-gray-400">
                          <SelectValue     placeholder="Please choose an option..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent style={{ color: 'black' , fontWeight:"500", backgroundColor:"white" }} >
                        <SelectItem  value="started" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"  }}>I've just started</SelectItem>
                        <SelectItem value="ready" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"}}>I have prepared enough material</SelectItem>
                        <SelectItem value="Notready" style={{ color: 'gray' , fontWeight:"500", backgroundColor:"white"}}>None - I'm just getting started</SelectItem>

                     
                      </SelectContent>
                    </Select>
                  
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" onClick={handleNext} className="flex border-2 border-black ml-auto w-1/5 h-6 rounded h-8">Next </Button>
            </form>
          </Form>
          </div>
          </>

        );
      }
      
      export default About;



