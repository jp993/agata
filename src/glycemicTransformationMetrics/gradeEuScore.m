function gradeEuScore = gradeEuScore(data)
%gradeEuScore function that computes the glycemic risk assessment diabetes 
%equation score in the euglycemic range (GRADEeu) by Hill (ignores nan values).
%
%Input:
%   - data: a timetable with column `Time` and `glucose` containing the 
%   glucose data to analyze (in mg/dl). 
%Output:
%   - gradeEuScore: the glycemic risk assessment diabetes 
%   equation score in the euglycemic range (GRADEeu) (%).
%
%Preconditions:
%   - data must be a timetable having an homogeneous time grid.
%
% ------------------------------------------------------------------------
% 
% REFERENCE:
%   - Hill et al., "A method for assessing quality of control from
%   glucose profiles", Diabetic Medicine , 2007, vol. 24, pp. 753-758.
%   DOI: 10.1111/j.1464-5491.2007.02119.x.
%
% ------------------------------------------------------------------------
%
% Copyright (C) 2020 Giacomo Cappon
%
% This file is part of AGATA.
%
% ---------------------------------------------------------------------
    
    %Check preconditions 
    if(~istimetable(data))
        error('gradeEuScore: data must be a timetable.');
    end
    if(var(seconds(diff(data.Time))) > 0 || isnan(var(seconds(diff(data.Time)))))
        error('gradeEuScore: data must have a homogeneous time grid.')
    end
    
    %Compute index
    gradeEuScore = 100 - (gradeHypoScore(data) + gradeHyperScore(data));

end

