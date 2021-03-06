function adrr = adrr(data)
%adrr function that computes the average daily risk range (ADRR) of the
%glucose concentration (ignores nan values).
%
%Input:
%   - data: a timetable with column `Time` and `glucose` containing the 
%   glucose data to analyze (in mg/dl). 
%Output:
%   - adrr: the average daily risk range of the glucose concentration.
%
%Preconditions:
%   - `data` must be a timetable having an homogeneous time grid.
%
% ---------------------------------------------------------------------
%
% Copyright (C) 2020 Giacomo Cappon
%
% This file is part of AGATA.
%
% ---------------------------------------------------------------------
    
    %Check preconditions 
    if(~istimetable(data))
        error('adrr: data must be a timetable.');
    end
    if(var(seconds(diff(data.Time))) > 0 || isnan(var(seconds(diff(data.Time)))))
        error('adrr: data must have a homogeneous time grid.')
    end
    
    %Setup the formula parameters
    alpha = 1.084;
    beta = 5.381;
    gamma = 1.509;
    th = 112.5;
    
    %Get the first and last day limits
    firstDay = data.Time(1);
    firstDay.Hour = 0;
    firstDay.Minute = 0;
    firstDay.Second = 0;
    
    lastDay = data.Time(end);
    lastDay.Hour = 0;
    lastDay.Minute = 0;
    lastDay.Second = 0;
    lastDay = lastDay + day(1);
    
    %Calculate the number of days and preallocate the daily max lbgi and
    %hbgi
    nDays = days(lastDay-firstDay);
    maxLbgiDay = nan(nDays,1);
    maxHbgiDay = nan(nDays,1);
    
    for d = 1:nDays
        
        %Get the day of data
        dayData = data((data.Time >= firstDay + day(d-1)) & data.Time < (firstDay + day(d)),:);
        
        %Get rid of nans
        nonNanGlucose = dayData.glucose(~isnan(dayData.glucose));
    
        if(~isempty(nonNanGlucose))
    
            %Symmetrization
            f = gamma * ( log(nonNanGlucose).^alpha - beta );
    
            %Risk computation
            rl = 10 * f.^2;
            rl(nonNanGlucose > th) = 0;
            rh = 10 * f.^2;
            rh(nonNanGlucose < th) = 0;
            
            %Get the max risks
            maxLbgiDay(d) = max(rl);
            maxHbgiDay(d) = max(rh);
    
        end
        
    end
    
    adrr = nanmean( maxHbgiDay + maxLbgiDay );
    
end

